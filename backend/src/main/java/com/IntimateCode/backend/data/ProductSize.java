package com.IntimateCode.backend.data;

import jakarta.persistence.*;

@Entity
@Table(name = "product_sizes")
public class ProductSize {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Enumerated(EnumType.STRING)
    private Size size;

    private int quantity;

}
