package github

import (
	"context"
	"fmt"
	"net/http"

	"github.com/bradleyfalzon/ghinstallation"
	"github.com/datavillage-me/dv-documentation/docubot/internal"
	"github.com/google/go-github/github"
)

type GithubService struct {
	RepoOwner string
	RepoName  string
	client    *github.Client
}

func (g *GithubService) InitService(owner string, repo string) error {
	g.RepoOwner = owner
	g.RepoName = repo

	// Shared transport to reuse TCP connections.
	tr := http.DefaultTransport

	// Wrap the shared transport for use with the app ID 1 authenticating with installation ID 99.
	itr, err := ghinstallation.NewKeyFromFile(tr, internal.GetAppId(), internal.GetInstallationId(), internal.GetPrivateKeyFile())
	if err != nil {
		return err
	}

	// Use installation transport with github.com/google/go-github
	g.client = github.NewClient(&http.Client{Transport: itr})
	return nil
}

func (g *GithubService) GetBranch(ctx context.Context, branchName string) (*github.Reference, error) {
	refName := branchNameToRef(branchName)
	ref, _, err := g.client.Git.GetRef(ctx, g.RepoOwner, g.RepoName, refName)
	return ref, err
}

// TODO: do we have enough with commit SHA or URL?
func (g *GithubService) CreateBranch(ctx context.Context, branchName string, head *github.Commit) (*github.Reference, error) {
	branchRefName := branchNameToRef(branchName)

	t := "commit"
	obj := &github.GitObject{
		Type: &t,
		SHA:  head.SHA,
		URL:  head.URL,
	}

	newRef := &github.Reference{
		Ref:    &branchRefName,
		Object: obj,
	}

	newBranch, _, err := g.client.Git.CreateRef(ctx, g.RepoOwner, g.RepoName, newRef)
	return newBranch, err
}

func (g *GithubService) CommitBlob(ctx context.Context, blobContent string, path string, parentCommit string, commitMessage string) (*github.Commit, error) {
	enc := "utf-8"
	b := &github.Blob{
		Content:  &blobContent,
		Encoding: &enc,
	}

	blobResp, _, err := g.client.Git.CreateBlob(ctx, g.RepoOwner, g.RepoName, b)
	if err != nil {
		return nil, err
	}

	// create tree
	var blobs TreeBlobObjects = []TreeBlobObject{
		{
			Path: &path,
			SHA:  blobResp.SHA,
		},
	}

	newTree, _, err := g.client.Git.CreateTree(ctx, g.RepoOwner, g.RepoName, parentCommit, blobs.AsGithub())
	if err != nil {
		return nil, err
	}

	// create commit
	newCommit := &github.Commit{
		Message: &commitMessage,
		Parents: []github.Commit{{SHA: &parentCommit}},
		Tree:    newTree,
	}

	commitResp, _, err := g.client.Git.CreateCommit(ctx, g.RepoOwner, g.RepoName, newCommit)

	return commitResp, err
}

func (g *GithubService) CreatePR(ctx context.Context, title string, body string, head string, base string) (*github.PullRequest, error) {
	newPr := &github.NewPullRequest{
		Title: &title,
		Body:  &body,
		Head:  &head,
		Base:  &base,
	}

	pr, _, err := g.client.PullRequests.Create(ctx, g.RepoOwner, g.RepoName, newPr)
	return pr, err
}

func branchNameToRef(branchName string) string {
	return fmt.Sprintf("refs/heads/%s", branchName)
}

// TODO: debug method, remove before merge
// func writeJsonSafe(filename string, v any) {
// 	m, err := json.Marshal(v)
// 	if err != nil {
// 		fmt.Printf("could not unmarshal: %s", err.Error())
// 		return
// 	}

// 	err = os.WriteFile(filename, m, 0644)
// 	if err != nil {
// 		fmt.Printf("could not write: %s", err.Error())
// 	}
// }
