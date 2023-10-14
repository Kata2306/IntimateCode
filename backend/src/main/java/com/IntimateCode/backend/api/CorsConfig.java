package com.IntimateCode.backend.api;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfig implements WebMvcConfigurer {

    public CorsConfig() {
        System.out.println("CorsConfig loaded");
    }
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/products/**") // Add "/*" to allow any sub-paths
                .allowedOrigins("http://localhost:5173") // Specify the origin for your frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Specify all HTTP methods
                .allowCredentials(true);
    }

}
