using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Leran
{
    internal class Product
    {
        public string Name { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }

        public Product(string name, double price, int quantity) { 
            Name = name;
            Price = price;
            Quantity = quantity;
        }

        public override string ToString()
        {
            return Name +" | " + " R$" + Price + " | " + Quantity;
        }

        public double total()
        {
            return Price * Quantity;
        }
        public void updatePrice(double percentage)
        {
            Price = Price * (1.0 + percentage / 100.0);
        }
    }
}
