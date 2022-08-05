package com.desafio.Padrao_projetos.modelo;

import org.springframework.stereotype.Component;

import javax.persistence.*;

@Entity
public class Conta implements IConta
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer numeroConta;
    private String agencia;
    private Double saldo;
    private Double limite;
    private String tipoConta;
    @OneToOne
    private Cliente cliente;

    @Override
    public void depositar(Double valor)
    {

    }

    @Override
    public void sacar(Double valor)
    {

    }

    @Override
    public void transferir(String agencia, Integer numeroConta, Double valor)
    {

    }

    @Override
    public void imprimirSaldo()
    {

    }

    public Integer getNumeroConta()
    {
        return numeroConta;
    }

    public void setNumeroConta(Integer numeroConta)
    {
        this.numeroConta = numeroConta;
    }

    public String getAgencia()
    {
        return agencia;
    }

    public void setAgencia(String agencia)
    {
        this.agencia = agencia;
    }

    public Double getSaldo()
    {
        return saldo;
    }

    public void setSaldo(Double saldo)
    {
        this.saldo = saldo;
    }

    public Double getLimite()
    {
        return limite;
    }

    public void setLimite(Double limite)
    {
        this.limite = limite;
    }

    public String getTipoConta()
    {
        return tipoConta;
    }

    public void setTipoConta(String tipoConta)
    {
        this.tipoConta = tipoConta;
    }

    public Cliente getCliente()
    {
        return cliente;
    }

    public void setCliente(Cliente cliente)
    {
        this.cliente = cliente;
    }
}
