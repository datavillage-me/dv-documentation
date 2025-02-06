package eventhandler

import (
	"context"
	"fmt"

	"github.com/datavillage-me/dv-documentation/docubot/internal"
	gh_s "github.com/datavillage-me/dv-documentation/docubot/internal/service/github"
)

type ReleaseEventHandler struct{}

func (r *ReleaseEventHandler) HandlePublishRelease(ctx context.Context, releaseName string) error {
	var owner = internal.GetSafeRepoOwner()
	var repo = internal.GetSafeRepoName()

	c := &gh_s.GithubService{}
	if err := c.InitService(owner, repo); err != nil {
		return err
	}

	// get main
	mainBranch, err := c.GetBranch(ctx, "main")
	if err != nil {
		return err
	}

	// commit blob
	blobContent := "This file was added through docubot"
	commitMessage := "[DOCUBOT] Test from Docubot"
	fileName := fmt.Sprintf("api/%s.txt", releaseName)
	newCommit, err := c.CommitBlob(ctx, blobContent, fileName, *mainBranch.Object.SHA, commitMessage)
	if err != nil {
		return err
	}

	// create branch
	newBranchName := fmt.Sprintf("docubot/release/control-plane/%s", releaseName)
	if _, err = c.CreateBranch(ctx, newBranchName, newCommit); err != nil {
		return err
	}

	// create pr
	title := "[DOCUBOT] PR by docubot"
	body := "A PR created by docubot on release published event"
	_, err = c.CreatePR(ctx, title, body, newBranchName, "main")

	return err
}
