import { Controller, Get } from '@nestjs/common';

@Controller('testo')
export class TestoController {

    @Get()
    getAll(): string {
        return 'testo'
    }
    
}
