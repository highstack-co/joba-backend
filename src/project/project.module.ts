import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { LoggerModule } from 'src/logger/logger.module';
import { UsersModule } from 'src/users/users.module';
import { InvoiceModule } from 'src/invoice/invoice.module';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectService],
  imports: [TypeOrmModule.forFeature([Project]), LoggerModule, UsersModule, InvoiceModule],
})
export class ProjectModule {}
