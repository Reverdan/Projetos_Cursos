package com.desafio.Padrao_projetos.servicos;

import com.desafio.Padrao_projetos.modelo.*;
import feign.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import java.util.Optional;

@Service
public class ContaServico implements IContaServico
{
    @Autowired
    private ContaRepositorio contaRepositorio;
    @Autowired
    private ClienteRepositorio clienteRepositorio;

    @Override
    public Conta buscarPorNumeroConta(Integer numeroConta)
    {
        return contaRepositorio.findById(numeroConta).get();
    }

    @Override
    public void atualizarConta(Conta conta)
    {

    }

    @Override
    public void excluirConta(Conta conta)
    {

    }

    @Override
    public void inserirConta(Conta conta)
    {


    }
}
