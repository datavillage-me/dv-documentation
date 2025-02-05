package internal

import (
	"fmt"
	"os"
	"strconv"
)

func GetAppId() int {
	v, err := getEnvironmentVariable("APP_ID")
	if err != nil {
		panic(err)
	}
	return atoiSafe(v)
}

func GetInstallationId() int {
	v, err := getEnvironmentVariable("INSTALLATION_ID")
	if err != nil {
		panic(err)
	}
	return atoiSafe(v)
}

func GetPrivateKeyFile() string {
	v, err := getEnvironmentVariable("PRIVATE_KEY_FILE")
	if err != nil {
		panic(err)
	}
	return v
}

func GetSafePort() int {
	v, err := getEnvironmentVariable("PORT")
	if err != nil {
		return 8082
	}
	return atoiSafe(v)
}

func getEnvironmentVariable(key string) (string, error) {
	value, found := os.LookupEnv(key)
	if !found {
		return "", fmt.Errorf("env variable not set: %s", key)
	}
	return value, nil
}

func atoiSafe(v string) int {
	s, err := strconv.Atoi(v)
	if err != nil {
		fmt.Printf("could not convert env variable to integer: %s", err.Error())
		return 8082
	}
	return s
}
