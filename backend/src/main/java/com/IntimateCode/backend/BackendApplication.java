package com.IntimateCode.backend;

import com.IntimateCode.backend.model.classes.ApplicationUser;
import com.IntimateCode.backend.model.classes.Role;
import com.IntimateCode.backend.repository.RoleRepository;
import com.IntimateCode.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);

	}





}
