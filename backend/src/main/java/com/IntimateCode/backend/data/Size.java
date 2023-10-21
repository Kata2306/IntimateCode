package com.IntimateCode.backend.data;

import jakarta.persistence.*;

@Entity
@Table(name = "sizes")
public class Size {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "XS")
    private Integer xs;

    @Column(name = "S")
    private Integer s;

    @Column(name = "M")
    private Integer m;

    @Column(name = "L")
    private Integer l;

    @Column(name = "XL")
    private Integer xl;

    @Column(name = "XXL")
    private Integer xxl;

    @Column(name = "XXXL")
    private Integer xxxl;
}
