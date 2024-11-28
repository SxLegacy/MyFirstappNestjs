import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
    name: string;
    age: number;
} //esto se crea cuando se quiere declarar algo como objeto

@Injectable() //ej de logicas reutilizables funciones que consulten bases de datos
export class TasksService {

    private tasks = [] //esto clasifica la tsks como una instancia de  arreglo que peude contener varios objetos

    // getTasks(): User{
    //     return {
    //         name: 'John',
    //         age: 40,
    //     }        
    // }
    getTasks(){
        return this.tasks;
    }
    getTask(id: number){
        const taskFound = this.tasks.find(task => task.id == id)

        if (!taskFound) {
            return new NotFoundException(`No se encontro la tarea con el id ${id}`) 
        }//el problema del throw es que acaba con al ejecución del programa

        return this.tasks.find(task => task.id == id);
    }

    createTasks(task: CreateTaskDto){
        console.log(task);
        this.tasks.push({
            ...task,
        id: this.tasks.length + 1,
    });
        return task;
        return 'creando todas las tareas'    
    }

    deleteTasks(){
        return 'eliminando todas las tareas'
    }

    updateTasks(task: UpdateTaskDto){
        console.log(task)
        return 'actualizando todas las tareas'
    }

    updateTasksStatus(){
        return 'actualizando parcialmente todas las tareas'
    }
    
}
