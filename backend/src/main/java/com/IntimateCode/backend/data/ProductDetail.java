package com.IntimateCode.backend.data;

import jakarta.persistence.*;

@Entity
@Table(name = "product_details")
public class ProductDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private String detail;

    // Getters/setters...
}
