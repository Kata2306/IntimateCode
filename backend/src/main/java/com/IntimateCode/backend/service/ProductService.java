package com.IntimateCode.backend.service;

import com.IntimateCode.backend.model.classes.Product;
import com.IntimateCode.backend.repository.ProductRepository;
import com.IntimateCode.backend.service.exceptions.ProductNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts(){
      return productRepository.findAll();
    }

    public Product getProduct(Long id){
        Optional<Product> product = productRepository.findById(id);
        return product.orElse(null);
    }

    public Product postProduct(Product product){
        return productRepository.save(product);
    }

    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }

    public Product updateProduct(Long id, Product updatedProduct) throws ProductNotFoundException {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(ProductNotFoundException::new);


        existingProduct.setName(updatedProduct.getName());
        existingProduct.setPrice(updatedProduct.getPrice());
        existingProduct.setColor(updatedProduct.getColor());
        existingProduct.setBrand(updatedProduct.getBrand());
        existingProduct.setCategory(updatedProduct.getCategory());
        existingProduct.setImageUrl(updatedProduct.getImageUrl());
        existingProduct.setRating(updatedProduct.getRating());
        existingProduct.setDetails(updatedProduct.getDetails());

        return productRepository.save(existingProduct);
    }

    public List<Product> initialize(List<Product> productList){
        productRepository.deleteAll();
        return productRepository.saveAll(productList);
    }

}
