package com.desafio.Padrao_projetos.modelo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Component
public interface ClienteRepositorio extends CrudRepository<Cliente, Integer>
{
}
