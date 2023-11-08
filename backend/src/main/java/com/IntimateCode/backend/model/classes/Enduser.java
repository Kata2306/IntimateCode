package com.IntimateCode.backend.model.classes;

import com.IntimateCode.backend.model.enums.Role;
import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@Entity
public class Enduser {
    @Id
    private Long id;

    private String name;

    @OneToMany(mappedBy = "enduser", orphanRemoval = true)
    private List<Product> productList;

    private Boolean loggedIn = false;

    @Enumerated
    private Role role;


}
