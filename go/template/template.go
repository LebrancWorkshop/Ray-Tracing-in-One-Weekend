package template

import (
	"strconv"
)

type Template struct {
	Format string
	Width  int
	Height int
}

var template *Template

func PPM(format string, width int, height int) *Template {
	template = &Template{
		Format: format,
		Width:  width,
		Height: height,
	}
	return template
}

func (t *Template) Starter() string {
	widthFormat := strconv.Itoa(t.Width)
	heightFormat := strconv.Itoa(t.Height)
	header := t.Format + "\n" + widthFormat + " " + heightFormat + "\n255\n"
	return header
}