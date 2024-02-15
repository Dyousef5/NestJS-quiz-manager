import { Inject, Injectable } from '@nestjs/common';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @Inject('QUIZ_REPOSITROY') private quizRepository: Repository<Quiz>,
  ) {}
  async getAllQuize(): Promise<Quiz[]> {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .leftJoinAndSelect('qt.options','o')
      .getMany();
  }

  async getQuizById(id: number): Promise<Quiz> {
    return this.quizRepository.findOne({
      where: { id },
      relations: ['questions','questions.options'],
    });
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}
