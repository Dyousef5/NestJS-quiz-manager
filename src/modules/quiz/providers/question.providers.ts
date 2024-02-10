import { DataSource } from 'typeorm';
import { Question } from '../entities/question.entity';

export const questionProviders = [
  {
    provide: 'QUESTION_REPOSITROY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Question),
    inject: ['DATA_SOURCE'],
  },
];
