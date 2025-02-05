package internal

import (
	"fmt"
	"os"
	"strconv"
)

func GetSafePort() int {
	v, err := getEnvironmentVariable("PORT")
	if err != nil {
		return 8082
	}

	s, err := strconv.Atoi(v)
	if err != nil {
		fmt.Printf("could not convert env variable to integer: %s", err.Error())
		return 8082
	}
	return s
}

func getEnvironmentVariable(key string) (string, error) {
	value, found := os.LookupEnv(key)
	if !found {
		return "", fmt.Errorf("env variable not set: %s", key)
	}
	return value, nil
}
