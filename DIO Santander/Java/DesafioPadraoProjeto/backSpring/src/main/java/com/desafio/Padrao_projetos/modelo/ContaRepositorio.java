package com.desafio.Padrao_projetos.modelo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
public interface ContaRepositorio extends CrudRepository<Conta, Integer>
{
}
