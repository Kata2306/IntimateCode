package com.IntimateCode.backend.service.runner;

import com.IntimateCode.backend.model.classes.ApplicationUser;
import com.IntimateCode.backend.model.classes.Role;
import com.IntimateCode.backend.repository.RoleRepository;
import com.IntimateCode.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@Configuration
public class DataLoaderConfig {

    @Bean
    CommandLineRunner run(RoleRepository roleRepository, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            createRoleIfNotExists("ADMIN", roleRepository);
            createRoleIfNotExists("USER", roleRepository);

            addUserIfNotExists("Viki", "bestProgrammerInTheWorld", Set.of(
                    "ADMIN"), userRepository, roleRepository, passwordEncoder);
            addUserIfNotExists("Kata", "bestProgrammerInTheWorld", Set.of(
                    "ADMIN"), userRepository, roleRepository, passwordEncoder);

            // Add additional USER role users
            addUserIfNotExists("Melina", "CoderGirl2023", Set.of("USER"),
                    userRepository, roleRepository, passwordEncoder);
            addUserIfNotExists("Theresa", "CrimeDinnerHost2023!", Set.of(
                    "USER"),
                    userRepository, roleRepository, passwordEncoder);
            addUserIfNotExists("Manuel", "NotSoGoodProgrammer1990", Set.of(
                    "USER"),
                    userRepository, roleRepository, passwordEncoder);
        };
    }

    private void createRoleIfNotExists(String authority, RoleRepository roleRepository) {
        if (!roleRepository.findByAuthority(authority).isPresent()) {
            roleRepository.save(new Role(authority));
        }
    }

    private void addUserIfNotExists(String username, String password,
                                    Set<String> roles,
                                    UserRepository userRepository,
                                    RoleRepository roleRepository,
                                    PasswordEncoder passwordEncoder) {
        ApplicationUser user = userRepository.findByUsername(username).orElse(null);

        if (user == null) {
            Set<Role> userRoles = new HashSet<>();
            roles.forEach(role -> {
                Role existingRole = roleRepository.findByAuthority(role).orElse(null);
                if (existingRole != null) {
                    userRoles.add(existingRole);
                }
            });

            userRepository.save(new ApplicationUser(null, username, passwordEncoder.encode(password), userRoles));
        }
    }
}
