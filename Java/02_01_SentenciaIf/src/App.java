import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        try (Scanner entrada = new Scanner(System.in)) {
            String opcion;
            double largo, ancho, radio, area, perimetro;

            System.out.print(
                    "Elige una opcion: \n\n"
                            + "1) Recatngulo\n"
                            + "2) Circunferencia \n"
                            + "0) Salir\n\n"
                            + ">> ");
            opcion = entrada.nextLine();

            switch (opcion) {
                case "1":
                    System.out.print("LARGO >> ");
                    largo = entrada.nextDouble();
                    entrada.nextLine();
                    System.out.print("ANCHO >> ");
                    ancho = entrada.nextDouble();
                    entrada.nextLine();
                    area = largo * ancho;
                    perimetro = largo * 2 + ancho * 2;
                    System.out.println("AREA =" + " " + area + " " + "PERIMETRO =" + " " + perimetro);
                    break;

                case "2":
                    System.out.print("RADIO >> ");
                    radio = entrada.nextDouble();
                    entrada.nextLine();
                    area = radio * radio * Math.PI;
                    perimetro = radio * 2 * Math.PI;
                    System.out.println("AREA =" + " " + area + " " + "PERIMETRO =" + " " + perimetro);
                    break;

                case "0":
                    System.out.print("Presiona ENTER para salir..,");
                    entrada.nextLine();
            }
        }
    }
}