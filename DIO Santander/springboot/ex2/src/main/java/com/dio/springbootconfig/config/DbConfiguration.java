package com.dio.springbootconfig.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@ConfigurationProperties("spring.datasource")
public class DbConfiguration
{
    private String driverClassName;
    private String url;
    private String username;
    private String password;

    @Profile("dev")
    @Bean
    public  String testDatabaseConnection()
    {
        return "DB dev";
    }

    @Profile("prod")
    @Bean
    public  String productionDatabaseConnection()
    {
        return "DB dev";
    }
}
