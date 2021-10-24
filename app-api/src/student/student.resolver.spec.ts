import { Test, TestingModule } from '@nestjs/testing';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

describe('StudentResolver', () => {
  let studentResolver: StudentResolver;
  let studentService: StudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentResolver,
        {
          provide: StudentService,
          useValue: {
            findAllStudents: jest.fn(),
            createStudent: jest.fn(),
          }
        }
      ],
    }).compile();

    studentResolver = module.get<StudentResolver>(StudentResolver);
    studentService = module.get<StudentService>(StudentService);
  });

  it('should be defined', () => {
    expect(studentResolver).toBeDefined();
  });
});
