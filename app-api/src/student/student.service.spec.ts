import { InternalServerErrorException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Student } from '../db/models/student.entity';
import { StudentService } from './student.service';
import ValidStudent from '../common/ValidStudent';

describe('Testing student service', () => {
  let studentService: StudentService;

  const mockRepository = {
    find: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentService,
        {
          provide: getRepositoryToken(Student),
          useValue: mockRepository
        }
      ]
    }).compile()

    studentService = module.get<StudentService>(StudentService);
  })

  it('StudentService should be defined', () => {
    expect(studentService).toBeDefined()
  })

  describe('findAllStudents', () => {
    it('Should list all students', async () => {
      const student = ValidStudent.exec();
      mockRepository.find.mockReturnValue([student, student]);
      const students = await studentService.findAllStudents();
      expect(students).toHaveLength(2);
      expect(mockRepository.find).toHaveBeenCalledTimes(1);
    })
  })

  describe('createStudent', () => {
    it('Should create student in database', async () => {
      const student = ValidStudent.exec();
      mockRepository.save.mockReturnValue(student);
      mockRepository.create.mockReturnValue(student);
      const savedStudent = await studentService.createStudent(student);
      expect(savedStudent).toMatchObject(student);
      expect(mockRepository.create).toHaveBeenCalledTimes(1);
      expect(mockRepository.save).toHaveBeenCalledTimes(1);
    })

    it('Should return an exception when can not create a student', async () => {
      const student = ValidStudent.exec();
      mockRepository.save.mockReturnValue(null);
      mockRepository.create.mockReturnValue(student);

      await studentService.createStudent(student).catch(error => {
        expect(error).toBeInstanceOf(InternalServerErrorException);
        expect(error).toMatchObject({
          message: 'Ocorreu um problema ao criar o aluno'
        })
      })
    })
  })
})