package Modelo;

public abstract class Banco implements IConta
{
    protected String agencia;


    public String getAgencia()
    {
        return agencia;
    }

    public void setAgencia(String agencia)
    {
        this.agencia = agencia;
    }
}
