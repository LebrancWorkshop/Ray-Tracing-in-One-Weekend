package vector3D

import (
	"math"
)

type Vector3D struct {
	xPoint int
	yPoint int
	zPoint int
}

var vect3 *Vector3D

func New(x int, y int, z int) *Vector3D {
	vect3 = &Vector3D {
		xPoint: x,
		yPoint: y,
		zPoint: z,
	}
	return vect3
}

func (v3 *Vector3D) Length() float64 {
	x := v3.xPoint
	y := v3.yPoint
	z := v3.zPoint
	square := float64(x*x + y*y + z*z)
	length := math.Sqrt(square)
	return length
}

func (v3 *Vector3D) Angle() float64 {
	// 
	return 0.0
}