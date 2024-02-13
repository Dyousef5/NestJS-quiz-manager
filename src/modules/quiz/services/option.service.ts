import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm/repository/Repository';
import { Option } from '../entities/option.entity';
import { CreateOptionDto } from '../dto/create-option.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class OptionService {
  constructor(
    @Inject('OPTION_REPOSITROY')
    private optionRepository: Repository<Option>,
  ) {}

  async createOption(
    option: CreateOptionDto,
    question: Question,
  ){
    const newOption = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });
    question.options = [...question.options, newOption];
    await question.save();

    return newOption;
  }
}
