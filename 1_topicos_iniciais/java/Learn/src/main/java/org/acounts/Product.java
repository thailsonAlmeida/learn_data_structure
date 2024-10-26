package org.acounts;

public class Product {
    private   String name;
    private  double price;
    private int quantity;

    public Product(String name, double price, int quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public double total(){
        return price * quantity;
    }

    public void updatePrice (double percentage){
        price = price * (1.0 + percentage / 100.0);
    }

    @Override
    public String toString() {
        return name + ": " + String.format("%.2f", price) + ": " + quantity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
