package Modelo;

public class Transacoes
{
    protected String mensagem;

    private Conta conta;

    public Transacoes(Conta conta)
    {
        this.conta = conta;
    }

    public Conta procurarConta(String agencia, Integer numeroConta)
    {
        this.mensagem = "";
        for (Conta conta : Estaticos.listaContas)
        {
            if (conta.agencia == agencia && conta.numeroConta == numeroConta)
                return conta;
        }
        this.mensagem = "Conta invalida";
        return null;
    }

    public Double verificaSaldo()
    {
        if (conta.getTipoConta() == TipoConta.poupanca)
            return conta.saldo;
        else
            return conta.saldo + conta.limite;
    }

    public void depositarValor(Double valor)
    {
        this.conta.saldo += valor;
    }

    public void sacarValor(Double valor)
    {
        this.mensagem = "";
        if (valor > (this.conta.saldo + this.conta.limite))
            this.mensagem = "Valor acima do saldo disponivel total";
        else
        {
            this.conta.saldo -= valor;
        }
    }

    public void tranferirValor(String agencia, Integer numeroConta, Double valor)
    {
        this.mensagem = "";
        Conta contaDestino = procurarConta(agencia, numeroConta);
        if (contaDestino != null)
        {
            sacarValor(valor);
            if (this.mensagem.equals(""))
                contaDestino.depositar(valor);
        }
    }
}
