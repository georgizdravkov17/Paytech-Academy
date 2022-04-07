let products = [
	{ product: "Shirt", price: 10 },
	{ product: "Laptop", price: 2400 },
	{ product: "Bike", price: 450 },
	{ product: "Chair", price: 150 },
	{ product: "Phone", price: 1500 },
	{ product: "Shoes", price: 60 },
	{ product: "Car", price: 25000 },
	{ product: "Coffe Machine", price: 500 }
];

let sumOfProductsPrices = 0;
products.forEach(({product, price}) => {
    let productCategory;
    switch(true){
        case price <= 100: productCategory = "Cheap";break;
        case price > 100 && price < 500: productCategory = "Normal";break;
        case price >= 500 && price <= 3000: productCategory = "Expensive";break;
        case price > 3000 : productCategory = "Super expensive";break;
        default: productCategory = "No such category";break;
    }

    sumOfProductsPrices += price;

    console.log(`${product} ${price} ${productCategory}`);
})

console.log(sumOfProductsPrices);





