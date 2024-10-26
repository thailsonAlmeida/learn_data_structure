//Exemplo 01 - Objeto estruturado
class Product{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    toString(){
        return `${this.name}, ${this.price.toFixed(2)}, ${this.quantity}`; 
    }

    total(){
        return this.price * this.quantity;
    }
    
    updatePrice(percentage){
        this.price = this.price * (1 + percentage / 100 );
    }
}

//Exemplo 2 - Objeto estruturado

function ProductPlus(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    this.toString = function(){
        return `${this.name}, ${this.price.toFixed(2)}, ${this.quantity}`; 
    };
}

// Sem OO
function total(product){
    return product.price * product.quantity;
}

function updatePrice(product, percentage){
    product.price = product.price * (1 + percentage / 100 );
}

// Instancias
const p1 = new Product("Laptop", 1000.0, 5);
const p2 = new Product("Headphones", 200.0, 2);

// Ações
const total1 = total(p1);
const total2 = p2.total();

console.log(total1);
console.log(total2);

updatePrice(p1, 10);
p2.updatePrice(30);

console.log(p1.price);
console.log(p2.price);