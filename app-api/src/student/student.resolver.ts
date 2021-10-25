import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateStudentInput } from './dto/create-student-input';
import { Student } from '../db/models/student.entity';
import { StudentService } from './student.service';

@Resolver()
export class StudentResolver {
  constructor(
    private studentService: StudentService 
  ) {}

  @Query(() => [Student])
  async students(
    @Args('name', { nullable: true }) name?: string,
    @Args('cpf', { nullable: true }) cpf?: string,
    @Args('email', { nullable: true }) email?: string
  ): Promise<Student[]> {
    const filter = { name, cpf, email }
    const students = await this.studentService.findAllStudents(filter);
    return students;
  }

  @Mutation(() => Student)
  async createStudent(
    @Args('data') data: CreateStudentInput
  ): Promise<Student> {
    const student = await this.studentService.createStudent(data);
    return student;
  }
}
