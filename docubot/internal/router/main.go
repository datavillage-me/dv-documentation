package router

import (
	"context"
	"fmt"

	api "github.com/datavillage-me/dv-documentation/docubot/api/docubot-gen"
)

type DocubotRouter struct{}

func (d DocubotRouter) HandleEvent(ctx context.Context, req *api.ReleasePublishedEvent) error {
	fmt.Printf("%+v\n", req)
	return nil
}
