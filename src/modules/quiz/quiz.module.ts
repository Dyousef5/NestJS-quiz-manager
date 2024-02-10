import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { quizProviders } from './quiz.providers';
import { DatabaseModule } from 'src/database/database.module';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { questionProviders } from './question.providers';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [DatabaseModule],
  providers: [
    QuizService,
    ...quizProviders,
    QuestionService,
    ...questionProviders,
  ],
})
export class QuizModule {}
