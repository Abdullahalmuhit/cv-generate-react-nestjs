import { CvResponseDTO } from './dto/CvResponseDTO.dto';
import { CvService } from './CvService.service';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

@Controller('api/cv')
export class CvController {
  constructor(private readonly cvService: CvService) {}

  @Get(':id')
  async getCv(@Param('id') id: string): Promise<CvResponseDTO> {
    const cvId = parseInt(id, 10);
    if (isNaN(cvId)) {
      throw new NotFoundException(`Invalid CV ID provided: ${id}`);
    }
    return this.cvService.getCvData(cvId);
  }
}