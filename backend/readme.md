## Info regarding Enums in PostgreSQL

You need to create enums in pgMyAdmin (or any other postgreSQL tool) first, in order to use them. 

Use the following SQL entries: 

```
CREATE TYPE color AS ENUM (
'green',
'blue',
'black',
'yellow',
'white',
'red',
'khaki',
'orange',
'pink',
'purple',
'brown',
'beige'
);
```

for the Brand enum: 

```
CREATE TYPE brand AS ENUM (
    'Intimissimi',
    'Fenty',
    'Bluebella',
    'Hanky_Panky',
    'Amorelie',
    'Fleur_de_Mal',
    'Victorias_Secret',
    'Agent_Provacateur',
    'CUUP'
);
```
for the Category enum: 

```
CREATE TYPE category AS ENUM (
    'Bras',
    'Panties',
    'Shapewear',
    'Lingerie_Set',
    'Hosiery',
    'Sleepwear',
    'Fetish'
);
```
for the Size enum: 

```
CREATE TYPE size AS ENUM (
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL',
    'XXXL'
);
```
