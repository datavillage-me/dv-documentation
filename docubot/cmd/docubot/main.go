package main

import (
	"fmt"

	"github.com/datavillage-me/dv-documentation/docubot/internal"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()

	port := internal.GetSafePort()
	fmt.Println(port)
}
