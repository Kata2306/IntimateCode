package com.IntimateCode.backend.database;

public interface TableStatements {
    String PRODUCTS = "CREATE TABLE IF NOT EXISTS products (" +
            "id SERIAL PRIMARY KEY," +
            "name VARCHAR(100)," +
            "price DECIMAL(10,2)," +
            "color color," +
            "brand brand," +
            "category category," +
            "imageurl VARCHAR(255)," +
            "rating DECIMAL(10,2)" +
            ");";

    String PRODUCT_SIZES = "CREATE TABLE IF NOT EXISTS product_sizes (" +
            "id SERIAL PRIMARY KEY," +
            "product_id INT," +
            "size size," +
            "quantity INT," +
            "CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES products(id)" +
            ");";

    String PRODUCT_DETAILS = "CREATE TABLE IF NOT EXISTS product_details (" +
            "id SERIAL PRIMARY KEY," +
            "product_id INT," +
            "detail TEXT," +
            "CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES products(id)" +
            ");";
}
