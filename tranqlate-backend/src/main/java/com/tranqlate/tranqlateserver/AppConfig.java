package com.tranqlate.tranqlateserver;

import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.tranqlate.tranqlateserver.authentication.GoogleAuthenticator;

@Configuration
@ComponentScan
public class AppConfig {
    @Bean
    public GoogleAuthenticator googleAuthenticator() throws IOException {
        return new GoogleAuthenticator("src/main/resources/tranqlate-dfc9ca7e63b3.json");
    }
}
