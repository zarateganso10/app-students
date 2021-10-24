import { InputType, Field } from "@nestjs/graphql";
import { IsString, IsNotEmpty, IsEmail } from "class-validator";


@InputType()
export class CreateStudentInput {
  @IsString()
  @Field()
  @IsNotEmpty({message: 'Este campo não pode estar vazio'})
  name: string;

  @IsString()
  @Field()
  @IsNotEmpty({message: 'Este campo não pode estar vazio'})
  cpf: string;

  @IsEmail()
  @Field()
  @IsNotEmpty({message: 'Este campo não pode estar vazio'})
  email: string;
}