// Product Management System

const products = [];
let nextProductId = 1;

function addProduct(name, price, quantity) {
    const product = {
        id: nextProductId++,
        name: name,
        price: price,
        quantity: quantity
    };

    products.push(product);
    console.log("Product added successfully!");
    return product;
}

function displayProducts() {
    console.log("\n--- Product List ---");

    if (products.length === 0) {
        console.log("No products available.");
        return;
    }

    products.forEach((product) => {
        console.log(`ID: ${product.id}`);
        console.log(`Name: ${product.name}`);
        console.log(`Price: $${product.price.toFixed(2)}`);
        console.log(`Quantity: ${product.quantity}`);
        console.log("-------------------");
    });
}

function findProduct(id) {
    const product = products.find((item) => item.id === id);

    if (product) {
        console.log("Product found:", product);
        return product;
    }

    console.log("Product not found!");
    return null;
}

function deleteProduct(id) {
    const index = products.findIndex((item) => item.id === id);

    if (index === -1) {
        console.log("Product not found!");
        return false;
    }

    products.splice(index, 1);
    console.log("Product deleted successfully!");
    return true;
}

// Sample products and operations
addProduct("Laptop", 899.99, 5);
addProduct("Headphones", 49.99, 12);

displayProducts();
findProduct(1);
deleteProduct(2);
displayProducts();
