import { jsonData } from "./file.js";

const parseTimestemp = (timestemp) => {
    return new Date(timestemp);
}

for (const course of jsonData){
    console.log(`Curso: ${course.id} - ${course.title}`)

    for(const lesson of course.lessons){
        console.log(`   Aula ${lesson.id}: - ${lesson.title}`)
        console.log(`       Media: ${lesson.media}`)
        console.log(`       Timestemp: ${parseTimestemp(lesson.timestamp)}`)
    }
}