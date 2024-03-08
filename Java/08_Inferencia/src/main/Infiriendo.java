package main;

import java.util.Scanner;

public class Infiriendo {
  public static void main(String[] args) {
    try (Scanner entrada = new Scanner(System.in)) {
      System.out.print("Ingresa la frase: ");
      var frase = entrada.nextLine();

      System.out.println("La frase << " + frase + " >> es correcta.");

      var i = 10;

    }
  }
}
