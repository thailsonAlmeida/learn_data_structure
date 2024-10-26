package org.acounts;

public class Main {
    //sem OO
    static double total(Product product){
        return product.getPrice() * product.getQuantity();
    }

    static void updatePrice (Product product, double percentage){
        var newPrice = product.getPrice() * (1.0 + percentage / 100.0);
        product.setPrice(newPrice);
    }

    public static void main(String[] args) {

        var p1 = new Product("Laptop", 1000.0, 5);
        var p2 = new Product("Headphone", 200.0, 2);

        var total1 = total(p1);
        var total2 = p2.total();

        System.out.println(total1);
        System.out.println(total2);

        updatePrice(p1, 20);
        p2.updatePrice(10);

        System.out.println(p1.getPrice());
        System.out.println(p2);

    }
}