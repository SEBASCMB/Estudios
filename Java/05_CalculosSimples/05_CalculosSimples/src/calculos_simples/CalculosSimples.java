package calculos_simples;

import java.util.Scanner;

public class CalculosSimples {
  public static void main(String[] args) {
    try (Scanner consola = new Scanner(System.in)) {
      double base, altura;
      double area;

      System.out.print("Ingresea la base: ");
      base = consola.nextDouble();
      consola.nextLine();

      System.out.print("Ingresa la altura: ");
      altura = consola.nextDouble();
      consola.nextLine();

      area = (base * altura) / 2;

      System.out.println("AREA = " + area);
    }

  }
}
