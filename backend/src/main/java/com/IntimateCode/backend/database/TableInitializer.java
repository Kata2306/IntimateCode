package com.IntimateCode.backend.database;


import com.IntimateCode.backend.database.Database;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Map;

public class TableInitializer {
    private final Database database;
    private final Map<String, String> tables;

    public TableInitializer(Database database, Map<String, String> tables) {
        this.database = database;
        this.tables = tables;
    }

    public void initialize() {
        tables.entrySet().stream()
                .filter(table -> !exists(table))
                .forEach(table -> create(table));
    }

    private boolean exists(Map.Entry<String, String> table) {
        String tableName = table.getKey();
        try (Connection connection = database.getConnection();
             ResultSet resultSet = connection.getMetaData()
                     .getTables(null, null, null, new String[]{"TABLE"})) {
            while (resultSet.next()) {
                String name = resultSet.getString("TABLE_NAME");
                if (tableName.equalsIgnoreCase(name)) {

                    System.out.println("Table detected = " + name);
                    System.out.println("");
                    return true;
                }
            }
            return false;
        } catch (SQLException ex) {
            System.err.println("Could not determine whether the table exists: " + tableName);
            throw new RuntimeException(ex);
        }
    }

    private void create(Map.Entry<String, String> table) {
        try (Connection connection = database.getConnection();
             Statement statement = connection.createStatement()) {
            statement.executeUpdate(table.getValue());

            System.out.println("Table created = " + table.getKey());
            System.out.println("");

        } catch (SQLException ex) {
            System.err.println("Could not create table: " + table.getKey());
            throw new RuntimeException(ex);
        }
    }


}
