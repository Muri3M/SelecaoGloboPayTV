### Instrunções de inicialização

Rode o comando abaixo em um terminal na raiz do projeto para inicialização do mesmo em um container docker

`docker-compose up --build`

Rode o comando abaixo em um terminal na pasta /backend do projeto para inicialização do backend em modo de desenvolvimento

`yarn dev`

Rode o comando abaixo em um terminal na pasta /frontend do projeto para inicialização do frontend em modo de desenvolvimento

`yarn dev`

Rode o comando abaixo em um terminal na pasta /backend do projeto para inicialização do backend em modo de produção

`yarn start`

Rode os comandos abaixo em um terminal na pasta /frontend do projeto para gerar uma build otimizada para produção do frontend e inicialização do frontend em modo de produção

`yarn build`
`yarn start`

Rode o comando abaixo caso queira gerar uma verssão do banco de dados

`docker run -e POSTGRES_PASSWORD=selecaoglobo -p 5432:5432 -d postgres`

### URLS

A votação deve ser acessada pela url: `http://127.0.0.1:3000`
E as metricas devem ser acessadas pela url: `http://127.0.0.1:3000/metrics`

_Não acessar pelo localhost pois o recaptcha precisar estar nesta url para funcionar_

### Comentarios

Se tivesse mais tempo eu mudaria o banco de dados, criando mais uma tabela para armazenar cada paredão separadamente e ter um campo de data para saber quando fosse o fim do paredão, enquanto estava fazendo o front pensei que dessa forma ficaria melhor e mais reultilizavel.

Como não implementei esse horario coloquei o contador de tempo para meia noite do dia seguinte.

Tambem gostaria de fazer uma pagina de resultado para paredões com mais de 2 brothers se tivesse mais tempo ja que a pagina sugerida não comporta mais de 2 participantes.

E Claro ter escrito os testes
