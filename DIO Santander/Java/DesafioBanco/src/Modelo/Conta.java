package Modelo;

public abstract class Conta extends Banco implements IConta
{
    protected Integer numeroConta = 0;
    protected Double saldo = 0.0;
    private String mensagem = "";
    protected Double limite = 0.0;
    private TipoConta tipoConta;
    protected Transacoes transacoes;


    public Conta(String agencia)
    {
        this.agencia = agencia;
        Estaticos.numeroConta ++;
        this.numeroConta = Estaticos.numeroConta;
        this.tipoConta = TipoConta.poupanca;
        transacoes = new Transacoes(this);
        Estaticos.listaContas.add(this);
    }

    public Conta(String agencia, Double limite)
    {
        this.agencia = agencia;
        Estaticos.numeroConta ++;
        this.numeroConta = Estaticos.numeroConta;
        this.limite = limite;
        this.tipoConta = TipoConta.corrente;
        transacoes = new Transacoes(this);
        Estaticos.listaContas.add(this);
    }

    @Override
    public void depositar(Double valor)
    {
        transacoes.depositarValor(valor);
    }

    @Override
    public void sacar(Double valor)
    {
        transacoes.sacarValor(valor);
        if(transacoes.mensagem.equals(""))
            this.mensagem = "Saque de R$" + valor + " efetuado com sucesso";
        else
            System.out.println(transacoes.mensagem);
    }

    @Override
    public void transferir(String agencia, Integer numeroConta, Double valor)
    {
        transacoes.tranferirValor(agencia, numeroConta, valor);
        if (transacoes.mensagem.equals(""))
            System.out.println("Transferencia efetuada com sucesso");
        else
            System.out.println(transacoes.mensagem);
    }

    @Override
    public void imprimirSaldo()
    {
        System.out.println("\n---------------------------------------");
        System.out.println("----------Impressao de saldo-----------");
        System.out.println("---------------------------------------");
        System.out.printf("Agencia: %s | Conta: %d | Tipo: %s \n", this.agencia, this.numeroConta, this.tipoConta.toString());
        if (this.tipoConta == TipoConta.corrente)
        {
            System.out.printf("Limite: %.2f \n", this.limite);
            System.out.printf("Saldo: %.2f \n", transacoes.verificaSaldo() - this.limite);
        }
        System.out.printf("Saldo Disponivel: %.2f \n", transacoes.verificaSaldo());
        System.out.println("---------------------------------------\n\n");
    }

    public Integer getNumeroConta()
    {
        return numeroConta;
    }

    public TipoConta getTipoConta()
    {
        return tipoConta;
    }
}
