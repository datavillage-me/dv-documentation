package tarball

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/cavaliergopher/grab/v3"
)

type TarballService struct{}

func (t *TarballService) DownloadAndExtract(url string, path string) (string, error) {
	resp, err := grab.Get(path, url)

	if err != nil {
		return "", err
	}

	f, err := os.Open(resp.Filename)
	if err != nil {
		return "", err
	}

	if err = untar(path, f); err != nil {
		return "", err
	}

	folderName, ok := strings.CutSuffix(resp.Filename, ".tar.gz")
	if !ok {
		return "", fmt.Errorf("file didnt end with .tar.gz")
	}

	outputPath := filepath.Join(path, folderName)

	return outputPath, nil
}
