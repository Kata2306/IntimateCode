package com.IntimateCode.backend;

import com.IntimateCode.backend.database.Database;
import com.IntimateCode.backend.database.TableInitializer;
import com.IntimateCode.backend.database.TableStatements;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Map;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);


		Database database = new Database(
				"jdbc:postgresql://localhost:5432/intimatecode-application",
				"postgres",
				"postgres");
		Map<String, String> tables = Map.of(
				"products", TableStatements.PRODUCTS
		);

        Map<String, String> tables2 = Map.of(
				"product_details", TableStatements.PRODUCT_DETAILS,
				"product_sizes", TableStatements.PRODUCT_SIZES
        );

		TableInitializer tableInitializer = new TableInitializer(database, tables);
		tableInitializer.initialize();

        // create second 2 tables related to the first one - cannot be created at the
        // same time!

        TableInitializer tableInitializer2 = new TableInitializer(database, tables2);
        tableInitializer2.initialize();


	}


}
