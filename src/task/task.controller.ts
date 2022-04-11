import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create_task.dto';
import { Task } from './interfaces/task.interface';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {

    constructor(private taskService: TaskService){}

    @Post()
    create(@Body() taskData:CreateTaskDto ): any {
        return this.taskService.create(taskData)
    }

    @Get()
    findAll(): any [] {
        return this.taskService.findAll()
    }

    @Get(":id")
    findOne(@Param('id',ParseIntPipe) id:number): Task {
        return this.taskService.findOneById(id);
    }
}
