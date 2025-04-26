import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { Company } from '../entity/company.entity';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CurrentUser, ICurrentUser } from 'src/decorators/current-user';
import { CreateCompanyDto } from './dtos/company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('')
  @UseGuards(AuthGuard)
  async getAllCompanies(
    @CurrentUser() user: ICurrentUser,
  ): Promise<Company[]> {
    return await this.companyService.getAllCompanies(user);
  }


  @Post('')
  @UseGuards(AuthGuard)
  async createCompany(
    @Body() company: CreateCompanyDto,
    @CurrentUser() user: ICurrentUser, 
  ): Promise<Company> {
    return await this.companyService.createCompany(company, user);
  }
}