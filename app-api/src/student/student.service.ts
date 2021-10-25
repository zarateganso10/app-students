import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './dto/create-student-input';
import { Student } from '../db/models/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ) {}

  async findAllStudents(filter: any): Promise<Student[]> {
    // Delete undefined keys
    Object.keys(filter).forEach(key => filter[key] === undefined && delete filter[key])
    const students = await this.studentRepository.find(filter);
    return students;
  }

  async createStudent(data: CreateStudentInput): Promise<Student> {
    const student = await this.studentRepository.create(data);
    const studentSaved = await this.studentRepository.save(student);

    if(!studentSaved) {
      throw new InternalServerErrorException('Ocorreu um problema ao criar o aluno');
    }

    return studentSaved;
  }
}
