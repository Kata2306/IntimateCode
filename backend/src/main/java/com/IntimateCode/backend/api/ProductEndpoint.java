package com.IntimateCode.backend.api;

import com.IntimateCode.backend.data.Product;
import com.IntimateCode.backend.data.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("products")
public class ProductEndpoint {

    private final ProductRepository productRepository;

    public ProductEndpoint(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping
    List<Product> findAll() {
        return productRepository.findAll();
    }

    @PostMapping
    Product save(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable long id) {
        productRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    Product update(@PathVariable Long id, @RequestBody Product updatedProduct) throws ProductNotFoundException {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(ProductNotFoundException::new);

        // Update the existing note with the data from updatedNote
        existingProduct.setName(updatedProduct.getName());
        existingProduct.setPrice(updatedProduct.getPrice());
        existingProduct.setColor(updatedProduct.getColor());
        existingProduct.setBrand(updatedProduct.getBrand());
        existingProduct.setCategory(updatedProduct.getCategory());
        existingProduct.setImageUrl(updatedProduct.getImageUrl());
        existingProduct.setRating(updatedProduct.getRating());

        //todo: implement PUT for product details and for product sizes

        // Save the updated note
        return productRepository.save(existingProduct);
    }

    //todo: implement requests for the remaining 2 database tables!

}
