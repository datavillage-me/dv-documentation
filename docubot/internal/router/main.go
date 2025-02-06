package router

import (
	"context"
	"fmt"
	"os/exec"
	"strings"

	api "github.com/datavillage-me/dv-documentation/docubot/api/docubot-gen"
	"github.com/datavillage-me/dv-documentation/docubot/internal"
	"github.com/datavillage-me/dv-documentation/docubot/internal/service/eventhandler"
	"github.com/datavillage-me/dv-documentation/docubot/internal/service/tarball"
)

type DocubotRouter struct{}

func (d *DocubotRouter) HandleEvent(ctx context.Context, req *api.ReleasePublishedEvent) error {
	tUrl := req.Release.Value.TarballURL.Value

	ts := tarball.TarballService{}
	codePath, err := ts.DownloadAndExtract(tUrl, "docubot_tmp")
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

	rs := eventhandler.ReleaseEventHandler{}
	err = rs.HandlePublishRelease(ctx, req.Release.Value.TagName.Value)
	if err != nil {
		fmt.Printf("%s", err.Error())
	}

	return err
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
