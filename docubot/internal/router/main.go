package router

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"

	api "github.com/datavillage-me/dv-documentation/docubot/api/docubot-gen"
	"github.com/datavillage-me/dv-documentation/docubot/internal"

	docuupdate "github.com/datavillage-me/dv-documentation/docubot/internal/service/docu-update"
	"github.com/datavillage-me/dv-documentation/docubot/internal/service/tarball"
)

type DocubotRouter struct{}

func (d *DocubotRouter) HandleEvent(ctx context.Context, req *api.ReleasePublishedEvent) error {
	tmpFolder := "docubot_tmp"
	os.Mkdir(tmpFolder, 0700)
	defer os.RemoveAll(tmpFolder)

	tUrl := req.Release.Value.TarballURL.Value

	ts := tarball.TarballService{}
	codePath, err := ts.DownloadAndExtract(tUrl, tmpFolder)
	if err != nil {
		return err
	}

	redoclyPath := internal.GetRedoclyPathSafe()

	fmt.Printf("running %s %s", redoclyPath, codePath)
	command := exec.Command(redoclyPath, codePath)

	var errBuf, outBuf strings.Builder
	command.Stderr = &errBuf
	command.Stdout = &outBuf
	if err := command.Run(); err != nil {
		fmt.Println(errBuf.String())
		return err
	}

	rs := docuupdate.DocuUpdater{}
	bundlePath := filepath.Join(codePath, "api", "bundle.yaml")
	err = rs.UpdateDocumentation(ctx, req.Release.Value.TagName.Value, bundlePath)
	if err != nil {
		fmt.Printf("%s", err.Error())
	}

	return err
}
