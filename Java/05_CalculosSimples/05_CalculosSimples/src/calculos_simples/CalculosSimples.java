package calculos_simples;

import java.util.Scanner;

public class CalculosSimples {
  public static void main(String[] args) {
    try (Scanner consola = new Scanner(System.in)) {

      final double pi = 3.141592;
      // final String palabra = "Hola";

      double radio;
      double perimetro, area;

      System.out.print("Ingrese el radio: ");
      radio = consola.nextDouble();
      consola.nextLine();

      perimetro = (radio * 2) * pi;
      area = radio * radio * pi;

      System.out.println("P = " + perimetro + " " + "A = " + area);
    }

  }
}