import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDiez() {
    return this.appService.getDiez();
  }

  @Get("sesionA")
  testSesionActiva() {
    return this.appService.testSesionActiva();
  }


  @Get(':fecha')
  findAll(@Param() params): Promise<any> {
    console.log(params.fecha);
    return this.appService.queryPorFecha(params.fecha)
  }
}
