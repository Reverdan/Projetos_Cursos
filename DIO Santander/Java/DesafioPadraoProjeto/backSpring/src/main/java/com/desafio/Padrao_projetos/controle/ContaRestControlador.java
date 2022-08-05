package com.desafio.Padrao_projetos.controle;

import com.desafio.Padrao_projetos.modelo.Conta;
import com.desafio.Padrao_projetos.servicos.ContaServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

@RestController
@RequestMapping("conta")
public class ContaRestControlador
{
    @Autowired
    private ContaServico contaServico;



    //    @GetMapping
//    public ResponseEntity<Conta> buscarPorNumeroConta()
//    {
//        return ResponseEntity.ok(contaServico.buscarPorNumeroConta(1));
//    }

    @GetMapping("/{numeroConta}")
    public ResponseEntity<Conta> buscarPorNumeroConta(@PathVariable Integer numeroConta)
    {
        return ResponseEntity.ok(contaServico.buscarPorNumeroConta(numeroConta));
    }
}
