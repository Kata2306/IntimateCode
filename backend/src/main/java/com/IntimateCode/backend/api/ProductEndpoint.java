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


    @GetMapping("/name/{name}")
    Product findByName(@PathVariable String name) throws ProductNotFoundException {
        return productRepository.findByName(name).orElseThrow(ProductNotFoundException::new);
    }

    @PostMapping
    Product save(@RequestBody Product note) {
        return productRepository.save(note);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable long id) {
        productRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    Product update(@PathVariable Long id, @RequestBody Product updatedNote) throws  ProductNotFoundException {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(ProductNotFoundException::new);

        // Update the existing note with the data from updatedNote
        existingProduct.setName(updatedNote.getName());

        // todo: set rest of fields

        // Save the updated note
        return productRepository.save(existingProduct);
    }

}
