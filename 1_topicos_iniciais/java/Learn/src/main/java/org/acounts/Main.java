package org.acounts;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.acounts.product.Product;
import org.acounts.readJson.entities.Course;
import org.acounts.readJson.entities.Lesson;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class Main {
    //sem OO
    /*
    static double total(Product product){
        return product.getPrice() * product.getQuantity();
    }

    static void updatePrice (Product product, double percentage){
        var newPrice = product.getPrice() * (1.0 + percentage / 100.0);
        product.setPrice(newPrice);
    }
*/
    public static void main(String[] args) {
        /*

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

         */

        //READ JSON WITH JAVA
        ObjectMapper objectMapper = new ObjectMapper();

        objectMapper.registerModule(new JavaTimeModule());

        try{
            File jsonFile = new File("C:/workspace/estrutura-de-dados/1_topicos_iniciais/java/Learn/src/main/resources/file.json");
            List<Course> courses = objectMapper.readValue(jsonFile, new TypeReference<List<Course>>() {});

            for (Course course : courses){
                System.out.println("Course Id: " + course.getId());
                System.out.println("Course Title: " + course.getTitle());

                List<Lesson> lessons = course.getLessons();
                for (Lesson lesson : lessons){
                    System.out.println();
                    System.out.println("    id: " + lesson.getId());
                    System.out.println("    title: " + lesson.getTitle());
                    System.out.println("    media: " + lesson.getMedia());
                    System.out.println("    timestemp: " + lesson.getTimestamp());
                }
                System.out.println();
            }
        }catch (IOException e){
            e.printStackTrace();
        }
    }
}