import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create_task.dto';
import { Task } from './interfaces/task.interface';

@Injectable()
export class TaskService {

    private readonly tasks:Task[] = [];
    private nextId:number = 0;

    create(task: CreateTaskDto): Task {

        let newTaskIndex:number = this.tasks.push({
            id:this.nextId,
            name:task.name,
            description: task.description
        });

        this.nextId++;

        return this.tasks[newTaskIndex - 1];
    }

    findAll(): Task[] {
        return this.tasks;
    }

    findOneById(id: number): Task{
        return this.tasks.find((task) => task.id === id)
    }
}
