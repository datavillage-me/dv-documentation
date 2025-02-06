package router

import (
	"context"
	"fmt"

	api "github.com/datavillage-me/dv-documentation/docubot/api/docubot-gen"
	"github.com/datavillage-me/dv-documentation/docubot/internal/service/eventhandler"
	"github.com/datavillage-me/dv-documentation/docubot/internal/service/tarball"
)

type DocubotRouter struct{}

func (d *DocubotRouter) HandleEvent(ctx context.Context, req *api.ReleasePublishedEvent) error {
	tUrl := req.Release.Value.TarballURL.Value

	ts := tarball.TarballService{}
	err := ts.DownloadAndExtract(tUrl, "docubot_tmp")
	if err != nil {
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
