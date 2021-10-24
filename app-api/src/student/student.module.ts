import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../db/models/student.entity';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student])
  ],
  providers: [StudentService, StudentResolver]
})
export class StudentModule {}
