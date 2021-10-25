import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { Student } from "../models/student.entity";

export class createStudents1735084068025 implements MigrationInterface {

  private students = [
    {
      name: "Matheus",
      cpf: "04521254019",
      email: "matheus@gmail.com"
    },
    {
      name: "Roberto",
      cpf: "75521254019",
      email: "roberto@gmail.com"
    },
    {
      name: "Lilian",
      cpf: "12321254019",
      email: "matheus@gmail.com"
    },
    {
      name: "João",
      cpf: "94651254019",
      email: "jaoa@gmail.com"
    },
    {
      name: "Adonias",
      cpf: "64521278019",
      email: "adonias@hotmail.com"
    },
    {
      name: "Pedro",
      cpf: "45234650159",
      email: "pedro@gmail.com"
    },
    {
      name: "Ricardo",
      cpf: "45212549002",
      email: "ricardo@yahoo.com"
    },
    {
      name: "Gabriel",
      cpf: "45212254019",
      email: "gabriel@hotmail.com"
    },
    {
      name: "Bruno",
      cpf: "45212534123",
      email: "bruno@hotmail.com"
    },
    {
      name: "Matheus",
      cpf: "45298654019",
      email: "matheus@hotmail.com"
    },
  ]

  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository(Student).save(this.students);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    this.students.forEach(async (student) => {
      await getRepository(Student).delete({ cpf: student.cpf })
    })
  }
}
