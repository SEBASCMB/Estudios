import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        try (Scanner entrada = new Scanner(System.in)) {
            int edad;

            System.out.print("Edad: ");
            edad = entrada.nextInt();
            entrada.nextLine();

            if (edad == 40) {
                System.out.print("Tienes exactamente 40");
            } else if (edad < 40) {
                System.out.print("Eres joven");
            } else {
                System.out.print("Eres viejo");
            }
        }
    }
}
