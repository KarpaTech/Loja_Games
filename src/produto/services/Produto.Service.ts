import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produtos } from '../entities/Produto.Entity';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { CategoriaService } from 'src/categoria/services/Categoria.Service';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produtos)
    private produtoRepository: Repository<Produtos>,
    private categoriaService: CategoriaService,
  ) {}

  async findAll(): Promise<Produtos[]> {
    return await this.produtoRepository.find();
  }

  async findById(id: number): Promise<Produtos> {
    const produto = await this.produtoRepository.findOne({
      where: {
        id,
      },
    });

    if (!produto) {
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    }
    return produto;
  }

  async findAllByTitulo(titulo: string): Promise<Produtos[]> {
    return await this.produtoRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      },
    });
  }

  async create(produto: Produtos): Promise<Produtos> {
    await this.categoriaService.findById(produto.categoria.id);
    return await this.produtoRepository.save(produto);
  }

  async update(produto: Produtos): Promise<Produtos> {
    await this.findById(produto.id);
    await this.categoriaService.findById(produto.categoria.id);
    return await this.produtoRepository.save(produto);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.produtoRepository.delete(id);
  }
}
