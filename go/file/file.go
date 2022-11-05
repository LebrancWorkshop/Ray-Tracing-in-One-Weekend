package file

import (
	"os"
	"fmt"
)

func WritePPM(fileName, content string) {
	f, err := os.Create(fileName + ".ppm")
	if err != nil {
		panic(err)
	}
	defer f.Close()
	f.WriteString(content)
	fmt.Println("[SUCCESS] File Created Successfully.")
}