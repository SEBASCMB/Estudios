import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        @SuppressWarnings("resource")
        Scanner entrada = new Scanner(System.in);

        String nombre1, nombre2, nombre3;
        int edad1, edad2, edad3;

        System.out.println("Ingrese el nombre: ");
        nombre1 = entrada.nextLine();

        System.out.println("Ingresa tu edad: ");
        edad1 = entrada.nextInt();
        entrada.nextLine();

        System.out.println("Ingrese el nombre: ");
        nombre2 = entrada.nextLine();

        System.out.println("Ingresa tu edad: ");
        edad2 = entrada.nextInt();
        entrada.nextLine();

        System.out.println("Ingrese el nombre: ");
        nombre3 = entrada.nextLine();

        System.out.println("Ingresa tu edad: ");
        edad3 = entrada.nextInt();

        System.out.println("Hola" + " " + nombre1 + " " + "es un gusto conocerte a tus" + " " + edad1 + " " + "años");
        System.out.println("Hola" + " " + nombre2 + " " + "es un gusto conocerte a tus" + " " + edad2 + " " + "años");
        System.out.println("Hola" + " " + nombre3 + " " + "es un gusto conocerte a tus" + " " + edad3 + " " + "años");
    }
}
