package com.IntimateCode.backend.data;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private double price;

    @Column(name = "color")
    private Color color;

    @Column(name = "brand")
    @Enumerated(EnumType.STRING)
    private Brand brand;

    @Column(name = "category")
    @Enumerated(EnumType.STRING)
    private Category category;

    @Column(name = "imageurl")
    private String imageUrl;

    @Column(name = "rating")
    private double rating;

    @Column(name = "details")
    private String details;

    @OneToOne(mappedBy = "product")
    private Size size;
}
