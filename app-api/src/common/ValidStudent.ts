import { Student } from '../db/models/student.entity';

export default class ValidStudent {
  static exec() {
    const student = new Student();

    student.id = '1';
    student.name = 'Matheus';
    student.cpf = '168.482.410-91';
    student.email = 'matheus@gmail.com';

    return student;
  }
}