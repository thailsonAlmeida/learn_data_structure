class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def __str__(self):
        return f"{self.name} | R${self.price} | {self.quantity}"
    
    def total(self):
        return self.price * self.quantity

    def update_price(self, percentage):
        self.price = self.price * (1 + percentage / 1)



def total(product):
    return product.price * product.quantity


def update_price(product, percentage):
    product.price = product.price * (1 + percentage / 100)


p1 = Product("Laptop", 1000.0, 5)
p2 = Product("Headphone", 200.0, 2)

total1 = total(p1)
total2 = p2.total()

print(total1)
print(total2)

update_price(p1, 10)
print(p1.price)

p2.update_price(10)
print(p2.price)