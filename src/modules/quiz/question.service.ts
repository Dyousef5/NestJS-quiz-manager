import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './question.entity';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @Inject('QUESTION_REPOSITROY')
    private questionRepository: Repository<Question>,
  ) {}
  getAllQuestion() {
    return [1, 2, 3, 5];
  }

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [newQuestion, ...quiz.questions];

    await quiz.save();

    

    return newQuestion;
  }
}
