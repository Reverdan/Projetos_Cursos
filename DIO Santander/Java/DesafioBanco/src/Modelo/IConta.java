package Modelo;

public interface IConta
{
    void depositar(Double valor);
    void sacar(Double valor);
    void transferir(String agencia, Integer numeroConta, Double valor);

    void imprimirSaldo();
}
