package com.IntimateCode.backend.service;

import com.IntimateCode.backend.model.classes.Product;
import com.IntimateCode.backend.model.classes.ProductSize;
import com.IntimateCode.backend.repository.ProductSizeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductSizeService {

    private final ProductSizeRepository productSizeRepository;


    public ProductSizeService(ProductSizeRepository productSizeRepository) {
        this.productSizeRepository = productSizeRepository;
    }

    public List<ProductSize> getAllProductSizes(){
        return productSizeRepository.findAll();
    }
}
