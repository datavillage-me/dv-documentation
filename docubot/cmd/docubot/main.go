package main

import (
	"fmt"
	"log"
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
	fmt.Println(port)

	srv, err := api.NewServer(&r)
	if err != nil {
		log.Fatal(err)
	}

	if err = http.ListenAndServe(fmt.Sprintf(":%d", port), srv); err != nil {
		log.Fatal(err)
	}
}
