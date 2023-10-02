# Aplicación Next.js con Tailwind CSS y ORM

Esta es una aplicación de ejemplo que utiliza Next.js, Tailwind CSS y un ORM para mostrar una página de inicio con un título y un subtítulo.

## Instalación

Para instalar la aplicación, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.
4. Crea un archivo `.env` en la carpeta raíz del proyecto y define las variables de entorno necesarias para la conexión a la base de datos. Por ejemplo:
<table>
  <thead>
    <tr>
      <th>Variable de entorno</th>
      <th>Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DB_HOST</td>
      <td>localhost</td>
    </tr>
    <tr>
      <td>DB_NAME</td>
      <td>my_database</td>
    </tr>
    <tr>
      <td>DB_USER</td>
      <td>my_username</td>
    </tr>
    <tr>
      <td>DB_PASS</td>
      <td>my_password</td>
    </tr>
  </tbody>
</table>

5. Crear manualmente la tabla users con los atributos definidos en el modelo user.js

6. Ejecuta el comando `npm run dev` para iniciar la aplicación en modo de desarrollo.

## Uso

Una vez que la aplicación esté en funcionamiento, puedes acceder a ella en tu navegador web en la dirección `http://localhost:3000`. La página de inicio mostrará un título y un subtítulo.

## Contribución

Si deseas contribuir a la aplicación, sigue estos pasos:

1. Haz un fork del repositorio en GitHub.
2. Clona el repositorio en tu máquina local.
3. Crea una nueva rama para tu contribución.
4. Realiza tus cambios y haz commit de tus cambios en la nueva rama.
5. Haz push de la nueva rama a tu fork en GitHub.
6. Crea un pull request en el repositorio original.

## Licencia

Esta aplicación está bajo la licencia MIT. Consulta el archivo LICENSE para obtener más información.