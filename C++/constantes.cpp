#include <iostream>
#include <string>

int main() {
  const float IVA = 19.0;
  float priceProduct;
  float ivaCalc, finalPrice;

  std::cout << "Ingresa el precio sin IVA: ";
  std::cin >> priceProduct;

  ivaCalc = priceProduct * IVA /100;
  finalPrice = priceProduct + ivaCalc;

  std::cout << "Valor inicial $" << priceProduct << " IVA $" << ivaCalc << " Final $" << finalPrice;
}