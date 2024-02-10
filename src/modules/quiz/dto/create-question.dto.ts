import { IsNotEmpty, Length } from "class-validator";

export class CreateQuestionDto {
  [x: string]: any;

  @Length(2,255)
  @IsNotEmpty()

  question : string


}
