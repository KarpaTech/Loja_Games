import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtos } from './produto/entities/Produto.Entity';
import { ProdutoModule } from './produto/Produto.Module';
import { Categoria } from './categoria/entities/Categoria.Entity';
import { CategoriaModule } from './categoria/Categoria.Module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root1234',
      database: 'db_lojagames',
      entities: [Produtos, Categoria],
      synchronize: true,
      logging: true,
    }),
    ProdutoModule,
    CategoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
