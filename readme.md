# ARTISAN BOILER PLATE
----------------------


- BOILER PLATE PARA DESENVOLVIMENTO WEB

*** Essse Boilerplate foi feito para facilitar seu desenvolvimento **

- Usando Sass/Scss 

## ESTRUTURA DE PASTAS
----------------------

- root
	L readme.md
	L gulpfile
	L package.json
	L.gitignore

- /public
	index.html 
	L css
		L final.css ( cssnano )
	L js
		L final.js ( uglify )
	L images

- resources
	L css
	main.scss
		L build
			L variaveis
			L grid
			L normalize
	L js
		main.js
			L build ( Bibliotecas Externas )


## INSTALAÇÃO
-------------

	- npm init
	- npm i --save-dev gulp
	- npm i --save-dev gulp-sass
	- npm i --save-dev gulp-uglify
	- npm i --save-dev gulp-plumber
	- npm i --save-dev live-server


## EXECUTANDO COMANDOS
----------------------

	- "gulp scripts" executa o comando para compilar a pasta JS e rodas as tarefas 'scripts' (plumber e uglify)
	- "gulp styles" executa o comando para compilar o SCSS em CSS da pasta resources/css para public/css
	- "gulp html" executa o comando para subir um servidor localhost na porta 4040 || 8080
	- "gulp watch" executa o comando para vigiar se algum arquivo css/js foi alterado, assim compilando os mesmo.
	- "gulp" executa todas tarefas ao mesmo instante.


			



