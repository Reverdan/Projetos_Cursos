package com.desafio.Padrao_projetos.modelo;

public interface IConta
{
    void depositar(Double valor);
    void sacar(Double valor);
    void transferir(String agencia, Integer numeroConta, Double valor);
    void imprimirSaldo();
}
