package tarball

import (
	"os"

	"github.com/cavaliergopher/grab/v3"
)

type TarballService struct{}

func (t *TarballService) DownloadAndExtract(url string, path string) error {
	resp, err := grab.Get(path, url)

	if err != nil {
		return err
	}

	f, err := os.Open(resp.Filename)
	if err != nil {
		return err
	}

	if err = untar(path, f); err != nil {
		return err
	}

	return nil
}
