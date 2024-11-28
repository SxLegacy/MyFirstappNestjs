import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query,} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TaskController {
    tasksService:TasksService;

    constructor(tasksService: TasksService) {//esto es una funcion que se ejecuta apenas la clase es instanciada, 
        this.tasksService = tasksService
    } //aqui se usa para traer el injectable de servicio, permite usar los metodos internos
    
    @Get() //este es el metodo http por el cual va a ser visitado
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.tasksService.getTasks();//esto llama al getTasks para que se ejecute cuando se llame getAllTasks()
    }  
    @Get('/:id') 
    getTask(@Param('id') id: string) {//param es para añadir dinamicamente un valor a la URL
        console.log(id)
        return this.tasksService.getTask(parseInt(id));//esto llama al getTasks para que se ejecute cuando se llame getAllTasks()
    }  
        
    @Post() 
    //@UsePipes(new ValidationPipe())//esto es lo que valida lo que ya se definio en el dto >>> es mejor usar globalpipes en el documento main
    createTask(@Body() task: CreateTaskDto) {//@body nos permite extraer la info que viene y la almacena en task
        return this.tasksService.createTasks(task);
    }      

    @Patch() 
    createTaskStatus() {
        return this.tasksService.updateTasksStatus();
    }     

    @Put() 
    updateTask(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTasks(task);
    }      

    @Delete() 
    deleteTask() {
        return this.tasksService.deleteTasks();
    }      
}