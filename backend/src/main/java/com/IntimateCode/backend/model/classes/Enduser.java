package com.IntimateCode.backend.model.classes;

import com.IntimateCode.backend.model.enums.Role;
import jakarta.persistence.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@Entity
public class Enduser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "enduser", orphanRemoval = true)
    private List<Product> productList;

    private boolean loggedIn;

    @Enumerated(EnumType.STRING)
    private Role role;


}
