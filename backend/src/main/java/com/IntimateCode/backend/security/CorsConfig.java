//package com.IntimateCode.backend.security;
//
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//@EnableWebMvc
//public class CorsConfig implements WebMvcConfigurer {
//
//    public CorsConfig() {
//        System.out.println("CorsConfig loaded");
//    }
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/user/**")
//                .allowedOrigins("http://localhost:3000", "http://localhost:8080")
//                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//                .allowedHeaders("Authorization", "Content-Type")
//                .exposedHeaders("Authorization")
//                .allowCredentials(true)
//                .maxAge(3600);
//    }
//
//}