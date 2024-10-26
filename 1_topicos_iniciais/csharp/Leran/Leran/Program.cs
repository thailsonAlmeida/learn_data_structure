using System;

namespace Leran // Note: actual namespace depends on the project name.
{
    internal class Program
    {
        //sem OO
        static double total(Product product)
        {
            return product.Price * product.Quantity;
        }
        static void updatePrice(Product product, double percentage)
        {
            product.Price = product.Price * (1.0 + percentage / 100.0);
        }
        static void Main(string[] args)

        {
            var p1 = new Product("Laptop", 1000.0, 5);
            var p2 = new Product("Headphone", 200.0, 2);

            var total1 = total(p1);
            var total2 = p2.total;

            updatePrice(p1, 10.0);
            p2.updatePrice(50);

            Console.WriteLine(total1);
            Console.WriteLine(p2.Price);

            Console.WriteLine(p1.Price);

        }
    }
}