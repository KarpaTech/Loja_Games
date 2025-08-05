import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entities/Categoria.Entity';
import { CategoriaController } from './controllers/Categoria.Controller';
import { CategoriaService } from './services/Categoria.Service';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria]), CategoriaModule],
  providers: [CategoriaService],
  controllers: [CategoriaController],
  exports: [CategoriaService],
})
export class CategoriaModule {}
