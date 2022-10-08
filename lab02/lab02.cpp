#include <iostream>
#include <string>

int main() {
	// Detail of PPM File. 
	const std::string format = "P3";
	const int width = 800;
	const int height = 600;
	std::cout << format << std::endl << width << " " << height << "\n255\n"; 

	return 0;
}