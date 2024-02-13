import { IsNotEmpty, Length } from "class-validator";

export class CreateQuestionDto {
  @Length(3,255)
  @IsNotEmpty()
  question : string

  @IsNotEmpty()
  quizId: number;


}
