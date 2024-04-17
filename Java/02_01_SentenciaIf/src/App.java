import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        try (Scanner entrada = new Scanner(System.in)) {
            String opcion;
            double largo, ancho, radio, area, perimetro;

            // * Presenta las opciones al usuario
            System.out.print(
                    "Elige una opcion: \n\n"
                            + "1) Recatngulo\n"
                            + "2) Circunferencia \n"
                            + "0) Salir\n\n"
                            + ">> ");
            opcion = entrada.nextLine();

            // * Procesa la opción seleccionada por el usuario
            switch (opcion) {
                case "1":
                    // * Solicita las dimensiones del rectángulo al usuario
                    System.out.print("LARGO >> ");
                    largo = entrada.nextDouble();
                    entrada.nextLine();
                    System.out.print("ANCHO >> ");
                    ancho = entrada.nextDouble();
                    entrada.nextLine();
                    // * Calcula el área y el perímetro del rectángulo
                    area = largo * ancho;
                    perimetro = largo * 2 + ancho * 2;
                    // * Muestra los resultados al usuario
                    System.out.println("AREA =" + " " + area + " " + "PERIMETRO =" + " " + perimetro);
                    break;

                case "2":
                    // * Solicita el radio de la circunferencia al usuario
                    System.out.print("RADIO >> ");
                    radio = entrada.nextDouble();
                    entrada.nextLine();
                    // * Calcula el área y el perímetro de la circunferencia
                    area = radio * radio * Math.PI;
                    perimetro = radio * 2 * Math.PI;
                    // * Muestra los resultados al usuario
                    System.out.println("AREA =" + " " + area + " " + "PERIMETRO =" + " " + perimetro);
                    break;

                case "0":
                    // * Muestra un mensaje de salida al usuario
                    System.out.print("Presiona ENTER para salir..,");
                    entrada.nextLine();
            }
        }
    }
}