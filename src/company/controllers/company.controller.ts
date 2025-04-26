import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { Company } from '../entity/company.entity';
import { AuthGuard } from 'src/auth/guards/auth.guard';

import { Users } from 'src/users/entity/users.entity';
import { CurrentUser } from 'src/decorators/current-user';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('')
  @UseGuards(AuthGuard)
  async createCompany(
    @Body() company: Company,
    @CurrentUser() user: Users, 
  ): Promise<Company> {
    return this.companyService.createCompany(company, user);
  }
}