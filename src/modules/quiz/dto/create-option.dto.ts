import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @Length(2, 255)
  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect: boolean;
}
