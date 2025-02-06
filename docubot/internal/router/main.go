package router

import (
	"context"

	api "github.com/datavillage-me/dv-documentation/docubot/api/docubot-gen"
	"github.com/datavillage-me/dv-documentation/docubot/internal/service/eventhandler"
)

type DocubotRouter struct{}

func (d *DocubotRouter) HandleEvent(ctx context.Context, req *api.ReleasePublishedEvent) error {
	s := eventhandler.ReleaseEventHandler{}
	return s.HandlePublishRelease(ctx, req.Release.Value.TagName.Value)
}
