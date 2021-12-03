

# Servidor Back End

# 1 – Json Serve Install

<b> npm install -g json-server </b>

# 2 – Json Serve Iniciar

Porto alternativo
Você pode iniciar o servidor JSON em outras portas com o --portsinalizador:

<b> json-server --watch db.json --port 3000 </b> 

Acesso de qualquer lugar
Você pode acessar sua API falsa de qualquer lugar usando CORS e JSONP.

# 3 – login de Acesso do Projeto

#### usuario:admin
#### senha: 123456

# 4 – Rotas
### Request	URL	Detalhes
GET	    /users/all	Busca todos os produtos <br>
GET	    /user/1	    Busca um produto <br>
POST	  /create  	  Salva um produto <br>
PUT	    /update/1	  Atualiza dos os dados do produto <br>
DELETE	/remove/1	  Remove um produto <br>


# Projeto  Drive Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
