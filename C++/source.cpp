#include <iostream>

class Rectangle
{
private:
  int length;
  int width;

public:
  Rectangle(int l, int w) : length(l), width(w) {}

  int calculatePerimeter() const
  {
    return 2 * (length + width);
  }

  int calculateArea() const
  {
    return length * width;
  }
};

int main()
{
  int length, width;

  std::cout << "Ingresa el largo: ";
  std::cin >> length;

  std::cout << "Ingresa el ancho: ";
  std::cin >> width;

  Rectangle rectangle(length, width);

  std::cout << "Perimetro = " << rectangle.calculatePerimeter() << std::endl;
  std::cout << "Area = " << rectangle.calculateArea() << std::endl;

  return 0;
}
