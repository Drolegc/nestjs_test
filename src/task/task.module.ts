import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerTaskMiddleware } from './middleware/task.middleware';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
    controllers: [TaskController],
    providers: [TaskService]
})
export class TaskModule implements NestModule{

    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(LoggerTaskMiddleware)
          .forRoutes(TaskController);
      }

}
