
## Why it's not possible to create all tables simultaneously

The products table has relations with the product_details and the product_sizes tables. 
When creating them all in one loop, an error is encountered. In the main static method, 
the database initializer is run twice because of this reason.

## POST request
Pay attention when adding new items. The fields in the request body must be the same as in the database. 