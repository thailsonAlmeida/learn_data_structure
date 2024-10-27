using System;
using System.Collections.Generic;
using Leran.read_json;
using Newtonsoft.Json;
//sem OO
/*
static double total(Product product)
{
    return product.Price * product.Quantity;
}
static void updatePrice(Product product, double percentage)
{
    product.Price = product.Price * (1.0 + percentage / 100.0);
}
*/
/*
var p1 = new Product("Laptop", 1000.0, 5);
var p2 = new Product("Headphone", 200.0, 2);

var total1 = total(p1);
var total2 = p2.total;

updatePrice(p1, 10.0);
p2.updatePrice(50);

Console.WriteLine(total1);
Console.WriteLine(p2.Price);

Console.WriteLine(p1.Price);
*/

//READ JSON
try
{
    string jsonFilePath = "C:\\workspace\\estrutura-de-dados\\1_topicos_iniciais\\csharp\\Leran\\Leran\\read-json\\file.json"; // Caminho relativo ao diretório de saída

    // read file
    string jsonContent = System.IO.File.ReadAllText(jsonFilePath);

    List<Course> courses = JsonConvert.DeserializeObject<List<Course>>(jsonContent);

#pragma warning disable CS8602 // Desreferência de uma referência possivelmente nula.
    for (int i = 0; i < courses.Count; i++)
    {
        Course course = courses[i];
        Console.WriteLine($"Course ID: {course.Id}");
        Console.WriteLine($"Course Title: {course.Title}");

        foreach (Lesson lesson in course.Lessons)
        {
            Console.WriteLine();
            Console.WriteLine($"    id: {lesson.Id}");
            Console.WriteLine($"    title: {lesson.Title}");
            Console.WriteLine($"    media: {lesson.Media}");
            Console.WriteLine($"    timestamp: {lesson.Timestamp}");
        }
        Console.WriteLine();

    }
#pragma warning restore CS8602 // Desreferência de uma referência possivelmente nula.
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
