package com.IntimateCode.backend.repository;

import java.util.Optional;

import com.IntimateCode.backend.model.classes.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RoleRepository extends JpaRepository<Role, Integer>{
    Optional<Role> findByAuthority(String authority);
}