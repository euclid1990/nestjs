import { Controller, Get, Param, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('endpointA/:id?')
  @Render('endpointA.njk')
  getEndpointA(@Req() request: Request, @Res() response: Response, @Param('id') id: string) {
    if (id == '1') return response.redirect('/endpointB');
    return { context: 'endpointA' };
  }

  @Get('endpointB')
  @Render('endpointB.njk')
  getEndpointB() {
    return { context: 'endpointB' };
  }

}
