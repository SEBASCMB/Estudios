package main;

import java.util.Scanner;

public class DivisionEntera {
  public static void main(String[] args) {
    try (Scanner entrada = new Scanner(System.in)) {
      int numeroCuatroCifras;
      int c1, c2, c3, c4, c5, c6;
      int suma;

      //4578

      System.out.print("Ingrese el numero de cuatro cifras: ");
      numeroCuatroCifras = entrada.nextInt();
      entrada.nextLine();

      c1 = numeroCuatroCifras % 10;
      
      // 4578 / 10 = 457 % 10 = 7

      c2 = (numeroCuatroCifras / 10) % 10;

      // 4578 / 100 = 45 % 10 = 5

      c3 = (numeroCuatroCifras / 100) % 10;

      //4578 / 1000 = 4

      c4 = (numeroCuatroCifras / 1000) % 10;

      c5 = (numeroCuatroCifras / 10000) % 10;

      c6 = numeroCuatroCifras / 100000;

      suma = c1 + c2 + c3 + c4 + c5 + c6;
      System.out.println("Suma de cifras = " + suma);
    }
  }
}