package com.desafio.Padrao_projetos;

import com.desafio.Padrao_projetos.controle.ContaRestControlador;
import com.desafio.Padrao_projetos.modelo.*;
import com.desafio.Padrao_projetos.servicos.ContaServico;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

@EnableFeignClients
@SpringBootApplication
public class PadraoProjetosApplication
{
	public static void main(String[] args)
	{
		SpringApplication.run(PadraoProjetosApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(ContaRepositorio cr, ClienteRepositorio clir)
	{
		return args ->
		{
			Conta conta1 = new Conta();
			conta1.setNumeroConta(0);
			conta1.setAgencia("1");
			conta1.setSaldo(25.00);
			conta1.setLimite(100.00);
			conta1.setTipoConta(TipoConta.corrente.toString());
			cr.save(conta1);

			Conta conta2 = new Conta();
			conta2.setNumeroConta(0);
			conta2.setAgencia("1");
			conta2.setSaldo(250.00);
			conta2.setLimite(0.0);
			conta2.setTipoConta(TipoConta.poupanca.toString());
			cr.save(conta2);
		};
	}

}
