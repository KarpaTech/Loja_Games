import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './entities/Produto.Entity';
import { ProdutoService } from './services/Produto.Service';
import { ProdutoController } from './controllers/Produto.Controller';
import { CategoriaModule } from 'src/categoria/Categoria.Module';

@Module({
  imports: [TypeOrmModule.forFeature([Produtos]), CategoriaModule],
  providers: [ProdutoService],
  controllers: [ProdutoController],
  exports: [],
})
export class ProdutoModule {}
