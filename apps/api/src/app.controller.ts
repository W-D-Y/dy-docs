import { Controller, Get } from '@nestjs/common';
import type { ApiResponse, DocumentSummary } from '@dy-docs/shared';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ApiResponse<DocumentSummary> {
    return this.appService.getHello();
  }
}
