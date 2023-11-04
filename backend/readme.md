
## Initialize database

You can initialize the database to the standard items by importing the postman collection and running the INITIALIZE database Post request.
Also, the backend is set to be cleared every time the application re-starts. 

## POST request
Pay attention when adding new items. The fields in the request body must be the same as in the database. 

## UPDATING a product with new sizes
The sizes are a separate table in the database. This is why we have a separate PATCH request for updating those values. You can find it in the Postman collection.