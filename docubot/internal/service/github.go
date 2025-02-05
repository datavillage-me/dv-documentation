package service

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/bradleyfalzon/ghinstallation"
	"github.com/datavillage-me/dv-documentation/docubot/internal"
	"github.com/google/go-github/github"
)

type GithubService struct{}

func (g *GithubService) CreateBranch(ctx context.Context, branchName string) error {
	c, err := loadClient()
	if err != nil {
		return err
	}
	ref, _, err := c.Git.GetRef(ctx, "datavillage-me", "dv-documentation", "refs/heads/main")
	if err != nil {
		return err
	}

	fmt.Println("marshalling")
	ref_json, err := json.Marshal(ref)
	if err != nil {
		return err
	}
	fmt.Println("writing")
	err = os.WriteFile("scrapbook/reference.json", ref_json, 0644)
	if err != nil {
		return err
	}

	return nil
}

func loadClient() (*github.Client, error) {
	// Shared transport to reuse TCP connections.
	tr := http.DefaultTransport

	// Wrap the shared transport for use with the app ID 1 authenticating with installation ID 99.
	itr, err := ghinstallation.NewKeyFromFile(tr, int64(internal.GetAppId()), int64(internal.GetInstallationId()), internal.GetPrivateKeyFile())
	if err != nil {
		return nil, err
	}

	// Use installation transport with github.com/google/go-github
	client := github.NewClient(&http.Client{Transport: itr})
	return client, nil
}
