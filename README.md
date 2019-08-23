# seminariojs
## viendo practica materia seminario(resumen de https://github.com/uqbar-project/js-get-started)

4 - Modificar el server para que sea restful:(para esto usamos la librería express agregando el módulo body-parser para que obtener más fácil el body)

 ' npm install express body-parser --save '

 5 - Nuestro servidor REST se comporta de la siguiente manera:

Method	url	body	accion
GET	/		devuelve todos los objetos de la home
GET	/uuid		devuelve el objeto cuyo id coincide con la url
POST	/	un objeto json	agrega el objeto del body a la home
PUT	/	un objeto json	realiza un update para el objeto dado en el body, un objeto con el mismo id ya debe existir en la home
DELETE	/uuid		borra de la home el objeto cuyo id coincide con la url


