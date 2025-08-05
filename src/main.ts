import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();

/*3 Métodos de Busca (GET)
1 Método de Persistência dos Objetos no Banco de dados (POST)
1 Método de Atualização dos Objetos persistidos no Banco de dados (PUT)
1 Método para apagar Objetos persistidos no Banco de dados (DELETE)
A Classe ''Service será responsável pelas regras de negócio e manipulação de dados,
como persistir, atualizar, buscar e deletar postagens. Ela se comunica diretamente com o banco de dados,
utilizando o repositório da entidade ''
*/
