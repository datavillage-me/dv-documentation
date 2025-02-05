package router

import (
	"context"

	api "github.com/datavillage-me/dv-documentation/docubot/api/docubot-gen"
	"github.com/datavillage-me/dv-documentation/docubot/internal/service"
)

type DocubotRouter struct{}

func (d *DocubotRouter) HandleEvent(ctx context.Context, req *api.ReleasePublishedEvent) error {
	s := service.GithubService{}
	return s.CreateBranch(ctx, "docubot/test")
}
