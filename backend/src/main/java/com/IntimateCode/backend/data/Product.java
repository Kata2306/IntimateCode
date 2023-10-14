package com.IntimateCode.backend.data;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private double price;

    @Column(name = "color")
    private Color color;

    @Column(name = "brand")
    private Brand brand;

    @Column(name = "category")
    private Category category;

    @Column(name = "imageurl")
    private String imageUrl;

    @Column(name = "rating")
    private double rating;

    @OneToMany(mappedBy = "product")
    private List<ProductSize> availableSizes;

    @OneToMany(mappedBy = "product")
    private List<ProductDetail> productDetails;

}

