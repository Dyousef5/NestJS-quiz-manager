import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { quizProviders } from './quiz.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [QuizController],
  imports: [DatabaseModule],
  providers: [QuizService, ...quizProviders],
})
export class QuizModule {}
