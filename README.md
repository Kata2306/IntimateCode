# IntimateCode

## Description 
CRUD web app for managing lingerie, users can add products to their wishlist or the cart. Admins can add new products. 

## Products
A product in the database looks like this: 
- int id
- String name
- Double price
- Enum color
- Enum brand
- Enum category
- String imageUrl
- Double rating
- Map<Size, Integer> availableAmount
- String[] productDetails

## Deployment
Live Website ?

## Pages

### Main Page
A product overview of all available products. The products can be filtered and there is a searchbar at the top. By clicking on a product, a user can see product details and save a product. Products can be added to the cart.

#### Cart page
Products can be added and deleted from the cart. The overall price is calculated in the cart. Users can buy products - the order appears in the user page

### User page
On the user page, the user can see his whishlist and his orders.

## API
API endpoints include: 
- GET all products (@all)
- GET a single product (@all)
- POST a new product (@admins)
- DELETE a product (@admins)
- POST a login (@users)
- GET a login - logout (@users)
- GET all users (@all)
- GET a single user (@all)
- POST a new user (@all)
- DELETE a user (@users)
