package com.desafio.Padrao_projetos.servicos;

import com.desafio.Padrao_projetos.modelo.Conta;

public interface IContaServico
{
    Conta buscarPorNumeroConta(Integer numeroConta);
    void atualizarConta(Conta conta);
    void excluirConta(Conta conta);
    void inserirConta(Conta conta);

}
