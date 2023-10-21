package com.IntimateCode.backend.api;

import com.IntimateCode.backend.data.Product;
import com.IntimateCode.backend.data.ProductRepository;
import com.IntimateCode.backend.data.Size;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


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

    @GetMapping("/{id}")
    Product findSingleProduct(@PathVariable long id) {
        Optional<Product> product = productRepository.findById(id);
        return product.orElse(null);
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
        existingProduct.setDetails(updatedProduct.getDetails());

        // Save the updated note
        return productRepository.save(existingProduct);
    }


    // product sizes for specific product

//    @GetMapping("/{id}/sizes")
//    List<Size> getProductSizesForProduct(@PathVariable long id) {
//        Optional<Product> product = productRepository.findById(id);
//        return product.map(Product::getAvailableSizes).orElse(null);
//    }

    //todo: implement requests for the remaining database tables!

}
