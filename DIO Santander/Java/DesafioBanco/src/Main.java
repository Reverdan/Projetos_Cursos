import Modelo.Banco;
import Modelo.ContaCorrente;
import Modelo.ContaPoupanca;

public class Main
{
    public static void main(String[] args)
    {
        ContaCorrente cc = new ContaCorrente("1", 500.00);
        ContaPoupanca cp = new ContaPoupanca("2");

        cc.depositar(135.00);
        cc.imprimirSaldo();

        cc.sacar(35.00);
        cc.imprimirSaldo();

        cc.sacar(750.00);
        cc.sacar(540.00);
        cc.imprimirSaldo();
        cc.sacar(35.00);
        cc.imprimirSaldo();
        cc.sacar(35.00);
        cc.imprimirSaldo();

        cp.depositar(268.00);
        cp.imprimirSaldo();
        cp.sacar(200.00);
        cp.imprimirSaldo();
        cp.sacar(200.00);
        cp.imprimirSaldo();

        cc.imprimirSaldo();
        cp.imprimirSaldo();

        cp.transferir("3", 1, 100.00);
        cp.transferir("1", 2, 100.00);
        cp.transferir("1", 1, 100.00);

        cc.imprimirSaldo();
        cp.imprimirSaldo();

        cp.transferir("1", 1, 60.00);

        cc.imprimirSaldo();
        cp.imprimirSaldo();
    }
}
