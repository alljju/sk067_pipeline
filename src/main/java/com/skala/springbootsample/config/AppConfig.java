package com.skala.springbootsample.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {

    // RestTemplate 빈을 설정하여 다른 서비스나 API와의 HTTP 통신을 쉽게 처리할 수 있게 합니다.
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
