import { Controller, Get, Post, Put, Delete, Req, Res } from '@nestjs/common';

import type { Request, Response } from 'express';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  hello(@Req() req: Request, @Res() res: Response) {
    return res.json(this.appService.hello());
  }

  @Post()
  create(@Req() req: Request, @Res() res: Response) {
    return res.json(this.appService.create());
  }

  @Get()
  getAll(@Req() req: Request, @Res() res: Response) {
    return res.json(this.appService.getAll());
  }

  @Get(':id')
  getOne(@Req() req: Request, @Res() res: Response) {
    return res.json(this.appService.getOne());
  }

  @Put(':id')
  update(@Req() req: Request, @Res() res: Response) {
    return res.json(this.appService.update());
  }

  @Delete(':id')
  delete(@Req() req: Request, @Res() res: Response) {
    return res.json(this.appService.delete());
  }
}
