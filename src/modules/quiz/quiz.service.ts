import { Inject, Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { Repository } from 'typeorm';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @Inject('QUIZ_REPOSITROY') private quizRepositry: Repository<Quiz>,
  ) {}
  getAllQuize() {
    return [1, 2, 3, 5];
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepositry.save(quiz);
  }
}
