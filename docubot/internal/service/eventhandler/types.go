package eventhandler

import "github.com/google/go-github/github"

type TreeBlobObject struct {
	SHA  *string `json:"sha,omitempty"`
	Path *string
}

func (tb TreeBlobObject) AsGithub() github.TreeEntry {
	m := "100644"
	t := "blob"
	return github.TreeEntry{
		Path: tb.Path,
		SHA:  tb.SHA,
		Mode: &m,
		Type: &t,
	}
}

type TreeBlobObjects []TreeBlobObject

func (tb TreeBlobObjects) AsGithub() []github.TreeEntry {
	result := make([]github.TreeEntry, 0, len(tb))

	for _, t := range tb {
		result = append(result, t.AsGithub())
	}

	return result
}
