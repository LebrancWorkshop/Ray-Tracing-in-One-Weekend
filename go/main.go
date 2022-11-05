package main

import (
	"github.com/LebrancWorkshop/Ray-Tracing-in-One-Weekend/go/file"
	"github.com/LebrancWorkshop/Ray-Tracing-in-One-Weekend/go/template"
	"strconv"
	_"fmt"
)

const (
	format string = "P3"
	width  int = 300
	height int = 200
)

func update() string{
	var content string 
	for i := 0; i < height; i++ {
		for j := 0; j < width; j++ {
			r := i
			g := i
			b := i
	
			stringR := strconv.Itoa(r)
			stringG := strconv.Itoa(g)
			stringB := strconv.Itoa(b)
			content += stringR + " " + stringG + " " + stringB + "\n"
		}
	}
	return content
}

func main() {
	template := template.PPM(format, width, height)
	header := template.Starter()
	content := update()

	image := header + content

	file.WritePPM("image", image)
	// fmt.Println(content)
}