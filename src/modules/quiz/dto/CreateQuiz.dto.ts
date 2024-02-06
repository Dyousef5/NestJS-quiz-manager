import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {

  @Length(2,255)
  @IsNotEmpty({message:'The quiz should have a title'})

  title : string

  @IsNotEmpty()
  @Length(2)
  description : string
}
