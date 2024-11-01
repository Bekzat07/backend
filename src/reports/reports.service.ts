import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportEntity } from './report.entity';
import { CreateReportDto } from './dto/create-report.dto';
import { User } from 'src/users/users.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(ReportEntity) private repo: Repository<ReportEntity>,
  ) {}
  create(reportData: CreateReportDto, user: User) {
    const report = this.repo.create(reportData);
    report.user = user;
    return this.repo.save(report);
  }
  async changeApproval(id: string, approved: boolean) {
    const report = await this.repo.findOne({ where: { id: parseInt(id) } });
    if (!report) {
      throw new NotFoundException('Report not found');
    }
    report.approved = approved;

    return this.repo.save(report);
  }
}
