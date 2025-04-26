import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CompanyService } from '../services/company.service';
import { Company } from '../entity/company.entity';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CurrentUser, ICurrentUser } from 'src/decorators/current-user';
import { CreateCompanyDto, UpdateCompanyDto } from './dtos/company.dto';

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

  @Put(':id')
  @UseGuards(AuthGuard)
  async updateCompany(
    @Param('id') id: string,
    @Body() company: UpdateCompanyDto,
    @CurrentUser() user: ICurrentUser,
  ): Promise<Company> {
    return await this.companyService.updateCompany(id, company, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteCompany(
    @Param('id') id: string,
    @CurrentUser() user: ICurrentUser,
  ): Promise<void> {
    return await this.companyService.deleteCompany(id, user);
  }
}