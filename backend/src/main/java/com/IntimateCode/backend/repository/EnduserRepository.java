package com.IntimateCode.backend.repository;

import com.IntimateCode.backend.model.classes.Enduser;
import com.IntimateCode.backend.model.classes.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
public interface EnduserRepository extends JpaRepository<Enduser, Long> {
}
