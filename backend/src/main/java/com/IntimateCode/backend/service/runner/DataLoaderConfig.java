package com.IntimateCode.backend.service.runner;

import com.IntimateCode.backend.model.classes.ApplicationUser;
import com.IntimateCode.backend.model.classes.Product;
import com.IntimateCode.backend.model.classes.ProductSize;
import com.IntimateCode.backend.model.classes.Role;
import com.IntimateCode.backend.model.enums.Brand;
import com.IntimateCode.backend.model.enums.Category;
import com.IntimateCode.backend.model.enums.Color;
import com.IntimateCode.backend.repository.ProductRepository;
import com.IntimateCode.backend.repository.RoleRepository;
import com.IntimateCode.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.*;

@Configuration
public class DataLoaderConfig {

    @Bean
    CommandLineRunner run(RoleRepository roleRepository,
                          UserRepository userRepository,
                          PasswordEncoder passwordEncoder,
                          ProductRepository productRepository) {
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

            // Initialize products
            initializeProducts(productRepository);
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

    private void initializeProducts(ProductRepository productRepository) {

        List<Product> products = List.of(
                new Product(1, "Black lace bralette", 19.99, Color.black,
                        Brand.Amorelie, Category.Bras, "https://www.hankypanky.com/cdn/shop/files/Hanky-Panky-Signature-Lace-Padded-Crossover-Bralette-Black-BLACK-View-1.jpg?v=1692906073", 4.5, "sexy, tight-fit, comfy",
                        new ProductSize(1L, null, 8, 12, 18, 15, 6, 3, 1), null),
                new Product(2, "Rose Petal Panties", 13.45, Color.pink,
                        Brand.Intimissimi, Category.Panties, "https://eqomcdn" +
                        ".com/content/photos/products/obsessive/75070/1693912646.obs6480_9.jpg?w=720&q=90", 4.2, "Elegant, versatile, durable",
                        new ProductSize(2L, null, 8, 12, 8, 10, 6, 3, 2), null),
                new Product(3, "Sexy blue slip", 26.79, Color.blue, Brand.Fenty,
                        Category.Panties, "https://eqomcdn" +
                        ".com/content/photos/products/christine-le-duc/69532/1684938265.cth010-blu-xss_3.jpg?w=720&q=90", 4.7, "Smooth, breathable, lightweight",
                        new ProductSize(3L, null, 1, 12, 1, 19, 6, 2, 5), null),
                new Product(4, "Sexy pink slip", 26.79, Color.pink, Brand.Fenty,
                        Category.Panties, "https://eqomcdn" +
                        ".com/content/photos/products/christine-le-duc/69529/1684937192.cth010-pnk-xss_3.jpg?w=720&q=90", 4.1, "Supportive, flexible, sporty",
                        new ProductSize(4L, null, 8, 12, 18, 15, 6, 3, 1), null),
                new Product(5, "Set with bra, panties and stockings", 65.20,
                        Color.black, Brand.Bluebella, Category.Lingerie_Set,
                        "https://eqomcdn.com/content/photos/products/christine-le-duc/48871/1687940134.065587_11.jpg?w=720&q=90", 3.9, "Vibrant, playful, trendy",
                        new ProductSize(5L, null, 3, 7, 22, 1, 6, 3, 1), null),
                new Product(6, "Suspender stockings Glorious - black", 9.99,
                        Color.black, Brand.Victorias_Secret, Category.Hosiery,
                        "https://eqomcdn.com/content/photos/products/christine-le-duc/64405/1678275347.cld-hblk-003-sm_5.jpg?w=720&q=90", 4.6, "Relaxed, casual, effortless",
                        new ProductSize(6L, null, 4, 11, 12, 14, 6, 3, 1), null),
                new Product(7, "Dark Desire latex body", 49.99, Color.black,
                        Brand.Agent_Provacateur, Category.Fetish, "https://eqomcdn" +
                        ".com/content/photos/products/christine-le-duc/64942/1694512937.bsrd-lblk-012-s_8.jpg?w=720&q=90", 4.7, "sexy, tight-fit, comfy",
                        new ProductSize(7L, null, 4, 11, 8, 10, 6, 3, 1), null),
                new Product(8, "Luxury bustier Veronica red", 45.20, Color.red,
                        Brand.CUUP, Category.Bras, "https://eqomcdn" +
                        ".com/content/photos/products/axami/62191/1650026199.VC-9691-S_6.jpg?w=720&q=90", 4.8, "Quirky, fun, eye-catching",
                        new ProductSize(8L, null, 5, 11, 12, 12, 6, 3, 1), null),
                new Product(9, "Magic bodyfashion body", 20.90, Color.black,
                        Brand.CUUP, Category.Shapewear, "https://img01.ztat" +
                        ".net/article/spp-media-p1/65adefa24b0e3bd2870c758c55ac58d5/9bbb41f84d9c4c50b845e2f32b6ad5cd.jpg?imwidth=1800", 4.9, "sexy, tight-fit, comfy",
                        new ProductSize(9L, null, 8, 12, 8, 5, 1, 4, 1), null),
                new Product(10, "Silk underdress with lace inserts", 15.90,
                        Color.blue, Brand.Intimissimi, Category.Sleepwear,
                        "https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dwe4be409c/images/LC71S11467-F.jpg?sw=1200&sfrm=jpeg", 4.0, "Relaxed, casual, effortless",
                        new ProductSize(10L, null, 0, 1, 8, 13, 2, 13, 1),
                        null),
                new Product(11, "Silk underdress with lace inserts", 15.90,
                        Color.blue, Brand.Intimissimi, Category.Sleepwear,
                        "https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dwe4be409c/images/LC71S11467-F.jpg?sw=1200&sfrm=jpeg", 4.0, "Relaxed, casual, effortless",
                        new ProductSize(10L, null, 0, 1, 8, 13, 2, 13, 1), null)

        );

        for (Product product : products) {
            ProductSize productSize = product.getProductSize();
            if (productSize != null) {
                productSize.setProduct(product);
            }
        }

        productRepository.saveAll(products);
    }




}
