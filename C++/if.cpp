#include <iostream>
#include <string>

int main()
{
  using namespace std;

  int edad;

  cout << "Ingresa tu edad: ";
  cin >> edad;

  if (edad <= 40)
  {
    cout << "Eres muy joven.\n";
    cout << "Tienes mucho por que vivir.\n";
  }
  else
  {
    cout << "Eres viejo.\n";
    cout << "Igulmente tienes mucho por que vivir.\n";
  }
  cout << "Gracias por compartir tu edad.";
}