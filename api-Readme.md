# Api usage
## Users:
 
>Methods: GET, POST, DELETE, PUT
>Status Codes: 200, 201, 400, 404, 500
		
## 1. GET

	- http://localhost:3000/product/listproducts
		
Response - HTTP 200:

```
[
    {
        "_id": "5f3411b032df883a08799674",
        "title": "example title",
        "color": "black",
        "price": "1312332.24",
        "currency": "TRY",
        "quantity": 1234,
        "__v": 0
    },
    {
        "_id": "5f3417cb44b04d3b3a26a0d5",
        "title": "example title 1",
        "color": "pink",
        "link": "https://3bbb.me",
        "currency": "USD",
        "__v": 0
    }
]
```

## 2. GET by id 

- http://localhost:3000/product/${productId}

- http://localhost:3000/product/5f34185bf59e423b5623be14


Response - HTTP 200:

```
{
    "_id": "5f34185bf59e423b5623be14",
    "title": "example title 3",
    "color": "gray",
    "price": "1334",
    "link": "https://3bbb.me",
    "currency": "EUR",
    "quantity": 1234,
    "__v": 0
}
```

## 3. POST

- http://localhost:3000/product/createproduct

Body:

```
{
    "title": "example title 4",
    "color": "black",
    "price": "4453.12",
    "link": "https://3bbb.me",
    "currency": "EUR",
    "quantity": 1234
}
```

required_fields = ["title"]

Response - HTTP 200:

```
{
    "_id": "5f341d195a39b13c7b2a9467",
    "title": "example title 4",
    "color": "black",
    "price": "4453.12",
    "link": "https://3bbb.me",
    "currency": "EUR",
    "quantity": 1234
    "__v": 0
}
```

## 4. DELETE

- http://localhost:3000/product/delete/${productId}

- http://localhost:3000/product/delete/5f341d195a39b13c7b2a9467


Response - HTTP 200:

```
{
    "message": "Product deleted Successfully"
}
```


## 5. PUT

- http://localhost:3000/product/update/${productId}

- http://localhost:3000/product/update/5f341d195a39b13c7b2a9467

Body:

```
{
    "color":"brown",
    "link": "https://3bbb.me",
    "price": "987.32"
}
```

Response - HTTP 200:

```
{
    "_id": "5f341d195a39b13c7b2a9467",
    "title": "example test 5",
    "color": "brown",
    "price": "987.32",
    "link": "https://3bbb.me",
    "currency": "TRY",
    "quantity": 1234,
    "__v": 0
}
```

----