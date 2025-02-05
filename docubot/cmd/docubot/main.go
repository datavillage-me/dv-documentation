package main

import (
	"fmt"
	"net/http"

	api "github.com/datavillage-me/dv-documentation/docubot/api/docubot-gen"
	"github.com/datavillage-me/dv-documentation/docubot/internal"
	"github.com/datavillage-me/dv-documentation/docubot/internal/router"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	r := router.DocubotRouter{}
	port := internal.GetSafePort()

	srv, err := api.NewServer(&r)
	if err != nil {
		panic(err)
	}

	if err = http.ListenAndServe(fmt.Sprintf(":%d", port), srv); err != nil {
		panic(err)
	}
}
