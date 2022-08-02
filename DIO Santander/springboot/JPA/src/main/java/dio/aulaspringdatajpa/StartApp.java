package dio.aulaspringdatajpa;

import dio.aulaspringdatajpa.model.Pessoa;
import dio.aulaspringdatajpa.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StartApp implements CommandLineRunner
{
    @Autowired
    private PessoaRepository repository;
    @Override
    public void run(String... args) throws Exception
    {
        Pessoa pessoa = new Pessoa();
        pessoa.setName("Reverdan");
        pessoa.setUsername("Rever");
        pessoa.setPassword("123");

        repository.save(pessoa);

        for (Pessoa p: repository.findAll())
        {
            System.out.println(p);
        }

    }
}
