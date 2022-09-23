#include <iostream>
#include <string>

int main() {
	// Detail of PPM File. 
	const std::string format = "P3";
	const int width = 800;
	const int height = 600;
	std::cout << format << std::endl << width << " " << height << "\n255\n"; 

	// Color Value of PPM File. 
	for (int j = height - 1; j >= 0; j--) {
		for (int i = 0; i < width; i++) {
			float r = float(i) / float(width);
			float g = float(j) / float(height);
			float b = 0.2;
			int ir = int(255.99 * r);
			int ig = int(255.99 * g);
			int ib = int(255.99 * b);
			std::cout << ir << " " << ig << " " << ib << " ";
		}
	}

	return 0;
}