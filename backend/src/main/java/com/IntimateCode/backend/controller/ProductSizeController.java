package com.IntimateCode.backend.controller;

import com.IntimateCode.backend.model.classes.ProductSize;
import com.IntimateCode.backend.service.ProductSizeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("productsizes")
public class ProductSizeController {

    private final ProductSizeService productSizeService;


    public ProductSizeController(ProductSizeService productSizeService) {
        this.productSizeService = productSizeService;
    }

    @GetMapping
    public List<ProductSize> getAllProductSizes(){
        return productSizeService.getAllProductSizes();
    }
}
