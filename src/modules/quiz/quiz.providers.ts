import { DataSource } from 'typeorm';
import { Quiz } from './quiz.entity';

export const quizProviders = [
  {
    provide: 'QUIZ_REPOSITROY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Quiz),
    inject: ['DATA_SOURCE'],
  },
];
