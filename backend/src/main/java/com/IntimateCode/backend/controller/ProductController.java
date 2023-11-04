package com.IntimateCode.backend.controller;

import com.IntimateCode.backend.model.classes.ProductSize;
import com.IntimateCode.backend.service.ProductService;
import com.IntimateCode.backend.service.exceptions.ProductNotFoundException;
import com.IntimateCode.backend.model.classes.Product;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @GetMapping
    List<Product> findAll() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    Product findSingleProduct(@PathVariable Long id) {
        return productService.getProduct(id);
    }

    @PostMapping
    Product save(@RequestBody Product product) {
        return productService.postProduct(product);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable long id) {
        productService.deleteProduct(id);
    }

    @PutMapping("/{id}")
    Product update(@PathVariable Long id, @RequestBody Product updatedProduct) throws ProductNotFoundException {
      return productService.updateProduct(id, updatedProduct);
    }

    @PostMapping("/initialize")
    List<Product> initializeDatabase(@RequestBody List<Product> productList){
        return productService.initialize(productList);
    }

    @PatchMapping("/add-sizes/{id}")
    Product addSizes(@RequestBody ProductSize productSize, @PathVariable Long id) throws ProductNotFoundException {
        return productService.updateProductSize(id, productSize);
    }
    @GetMapping("/{id}/sizes")
    ProductSize findSizesForProduct(@PathVariable Long id) {
        return productService.getSizesForSingleProduct(id);
    }


}
