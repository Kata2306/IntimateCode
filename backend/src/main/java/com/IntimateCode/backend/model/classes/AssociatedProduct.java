package com.IntimateCode.backend.model.classes;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="associatedProduct")
public class AssociatedProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer associatedProductId;
    @OneToOne(mappedBy = "associatedProduct", cascade = CascadeType.ALL)
    private ApplicationUser user;

    @OneToMany(mappedBy = "associatedProduct", cascade = CascadeType.ALL)
    private List<Product> wishlist;

    @OneToMany(mappedBy = "associatedProduct", cascade = CascadeType.ALL)
    private List<Product> cartList;

    public AssociatedProduct() {
        // Default constructor required by JPA
    }

    public AssociatedProduct(List<Product> wishlist, List<Product> cartList) {
        this.wishlist = wishlist;
        this.cartList = cartList;
    }

    // Getters and setters for fields

    public ApplicationUser getUser() {
        return user;
    }

    public void setUser(ApplicationUser user) {
        this.user = user;
    }

    public Integer getAssociatedProductId() {
        return associatedProductId;
    }

    public void setAssociatedProductId(Integer associatedProductId) {
        this.associatedProductId = associatedProductId;
    }

    public List<Product> getWishlist() {
        return wishlist;
    }

    public void setWishlist(List<Product> wishlist) {
        this.wishlist = wishlist;
    }

    public List<Product> getCartList() {
        return cartList;
    }

    public void setCartList(List<Product> cartList) {
        this.cartList = cartList;
    }
}
