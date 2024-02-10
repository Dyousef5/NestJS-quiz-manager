import { Inject, Injectable } from '@nestjs/common';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @Inject('QUIZ_REPOSITROY') private quizRepository: Repository<Quiz>,
  ) {}
  getAllQuize() {
    return [1, 2, 3, 5];
  }

  async getQuizById(id: number): Promise<Quiz> {
    return this.quizRepository.findOne({
      where: { id },
      relations: ['questions'],
    });
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}