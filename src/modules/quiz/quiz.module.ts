import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { quizProviders } from './providers/quiz.providers';
import { DatabaseModule } from 'src/database/database.module';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { questionProviders } from './providers/question.providers';
import { optionProviders } from './providers/option.providers';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';

@Module({
  controllers: [QuizController, QuestionController,OptionController],
  imports: [DatabaseModule],
  providers: [
    QuizService,
    ...quizProviders,
    QuestionService,
    ...questionProviders,
    OptionService,
    ...optionProviders
  ],
})
export class QuizModule {}
