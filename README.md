# altran-front-end-test

La aplicación no está completa, pero cumple con todo lo requerido para la prueba.
Digo que no está completa porque está pensada para tener muchas más funcionalidades de las que se requieren en la prueba, con el fin de poder usar esta misma prueba para mostrarla en otras postulaciones.

La razón de haber tardado más de lo previsto se debe a que he tenido muchas pruebas que hacer para distintas empresas.

En caso de que os parezca bien el resultado, os puedo decir que continuaré mejorando esta prueba y agregando más tests (me falta agregar un test de integración).

### Instrucciones para probar la aplicación

Como dije antes, la prueba no está como yo quiero que esté, por lo que probarla será más tedioso de lo que sería si estuviera completa, pero trataré de explicar lo mejor posible.

En cualquier directorio, abrir el terminal y correr `git clone https://github.com/olivaresvjuanp/altran-front-end-test.git`, luego, dentro de la carpeta `altran-front-end-test` ir al directorio `/src`, copiar el archivo `config-example.json` y pegarlo con el nombre `config.json`. Dentro de este archivo JSON pegar lo siguiente en `apiUrl`: `http://localhost:3001/api`.

Una vez hecho todo esto, en el directorio principal, correr: `yarn` (con esto se instalarán las dependencias), luego de que termine, correr `yarn start` y visitar `http://localhost:3000` en el navegador.

Para correr los tests, ejecutar el siguiente comando en el terminal: `yarn test`.

### Información adicional

Este README se irá actualizando a medida que vaya mejorando la prueba.
