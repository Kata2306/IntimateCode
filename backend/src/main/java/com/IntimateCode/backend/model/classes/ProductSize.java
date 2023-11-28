package com.IntimateCode.backend.model.classes;

import com.IntimateCode.backend.model.classes.Product;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
public class ProductSize {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "product_id")
    @JsonBackReference
    private Product product;


    private Integer xs;

    private Integer s;

    private Integer m;

    private Integer l;

    private Integer xl;


    private Integer xxl;


    private Integer xxxl;

    public ProductSize(Long id, Product product, Integer xs, Integer s, Integer m, Integer l, Integer xl, Integer xxl, Integer xxxl) {
        this.id = id;
        this.product = product;
        this.xs = xs;
        this.s = s;
        this.m = m;
        this.l = l;
        this.xl = xl;
        this.xxl = xxl;
        this.xxxl = xxxl;
    }

    public ProductSize() {
        // Empty constructor needed by Hibernate
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getXs() {
        return xs;
    }

    public void setXs(Integer xs) {
        this.xs = xs;
    }

    public Integer getS() {
        return s;
    }

    public void setS(Integer s) {
        this.s = s;
    }

    public Integer getM() {
        return m;
    }

    public void setM(Integer m) {
        this.m = m;
    }

    public Integer getL() {
        return l;
    }

    public void setL(Integer l) {
        this.l = l;
    }

    public Integer getXl() {
        return xl;
    }

    public void setXl(Integer xl) {
        this.xl = xl;
    }

    public Integer getXxl() {
        return xxl;
    }

    public void setXxl(Integer xxl) {
        this.xxl = xxl;
    }

    public Integer getXxxl() {
        return xxxl;
    }

    public void setXxxl(Integer xxxl) {
        this.xxxl = xxxl;
    }
}
