#include <iostream>
#include <string>

int main()
{
	const std::string format = "P3";
	const int width = 256;
	const int height = 256;
	const int color = 255;

	std::cout << format << std::endl << width << " " << height << std::endl << color << std::endl;

	for(int y = 0; y < height; y++)
	{
		for(int x = 0; x < width; x++)
		{
			if(x < y)
			{
				std::cout << 0 << " " << 0 << " " << 0 << std::endl;
			}
			else
			{
				std::cout << 255 << " " << 255 << " " << 255 << std::endl;
			}
		}
	}

	return 0;
} 