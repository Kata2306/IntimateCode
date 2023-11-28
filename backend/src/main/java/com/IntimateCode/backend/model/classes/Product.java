package com.IntimateCode.backend.model.classes;

import com.IntimateCode.backend.model.enums.Brand;
import com.IntimateCode.backend.model.enums.Category;
import com.IntimateCode.backend.model.enums.Color;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private double price;

    @Enumerated(EnumType.STRING)
    private Color color;

    @Enumerated(EnumType.STRING)
    private Brand brand;

    @Enumerated(EnumType.STRING)
    private Category category;

    private String imageUrl;

    private double rating;

    private String details;

    @OneToOne(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    private ProductSize productSize;


    @ManyToOne
    @JoinColumn(name = "associated_product_id")
    private AssociatedProduct associatedProduct;

    // Constructors, getters, and setters


    public Product(long id, String name, double price, Color color, Brand brand, Category category, String imageUrl, double rating, String details, ProductSize productSize, AssociatedProduct associatedProduct) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
        this.brand = brand;
        this.category = category;
        this.imageUrl = imageUrl;
        this.rating = rating;
        this.details = details;
        this.productSize = productSize;
        this.associatedProduct = associatedProduct;
    }

    public Product() {
        // Empty constructor needed by Hibernate
    }

    public AssociatedProduct getAssociatedProduct() {
        return associatedProduct;
    }

    public void setAssociatedProduct(AssociatedProduct associatedProduct) {
        this.associatedProduct = associatedProduct;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public ProductSize getProductSize() {
        return productSize;
    }

    public void setProductSize(ProductSize productSize) {
        this.productSize = productSize;
    }
}
