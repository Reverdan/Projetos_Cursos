package dio.aulaspringdatajpa.repository;

import dio.aulaspringdatajpa.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer>
{
}
