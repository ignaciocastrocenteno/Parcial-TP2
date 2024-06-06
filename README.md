# Evaluación Parcial - Taller de Programación II (TP2)

## Información del proyecto

### - _Alumno: Ignacio Julián Castro Centeno_

### - _Carrera: Analista de Sistemas Computacionales_

### - _Profesora: Débora Rolón_

### - _Fecha de examen: 06/06/2024_

## Guía de Instalación

    # Instalación de dependencias del proyecto
    npm install

    # Lanzar el servidor web
    npm start

    # Lanzar el servidor web (hot-realoding)
    npm run watch

    # Generar 'build' minificado para producción
    NO_DISPONIBLE

## Rutas Disponibles

- **Inserción de notas (_POST_ method)** - http://www.localhost:8080/grades
- **Obtener todos los estudiantes con sus notas (_GET_ method)** - http://www.localhost:8080/grades
- **Obtener un estudiante por ID (_GET_ method)** - http://www.localhost:8080/grades/:id

## Formato de Inserción para los estudiantes con sus notas

{
"name": "Juan Perez",
"grade": 10
}

## Aclaraciones

- **Stack utilizado: NodeJS + Express**

- **Modifiqué el formato de codificación del archivo 'package.json' de LF a CRLF.** Esto para evitar posibles incompatibilidades entre los diferentes sistemas operativos, al momento de trabajar con el archivo.

- **Agregué un archivo _'.gitignore'_ para cumplir con las buenas prácticas**, evitando subir los siguientes elementos: la carpeta 'node_modules'; el archivo 'package-lock.json'; todos los archivos temporales o de logs (para evitar 'bloating'); y los archivos '.env' con información eventualmente información sensible (API keys, variables de entorno, secretos, contraseñas, etc.)

- **Se implementó el patrón de diseño estructural _MVC (Model-View-Controller)_** dentro del proyecto, orientado a la construcción de una RESTful API. Se disponen de las carpetas genéricas que caracterizan a esta arquitectura _('routes', 'controllers', 'services', 'models')_, todo contenido dentro de un directorio principal _'src'_.

- **Se implementó el patrón de diseño estructural _DAO (Data Access Object)_** dentro del proyecto, haciendo uso de otro patrón diseño llamado _'Abstract Factory'_. La arquitectura DAO nos permite generar una _'abstract interface'_ entre la aplicación y los diferentes mecanismos de persistencia disponibles, de modo que la capa _'services'_ correspondiente a cada entidad, hable directamente con la factoría, en lugar de hablar con cada modelo concreto. Esto permite ocultarle a los servicios, los detalles de implementación: el cómo es almacenada y accesada la información.

- La aplicación está lista para ser lanzada con el framework Express, luego de utilizarse el comando _'npm install'_ que instalará todas las dependencias requeridas para el funcionamiento del proyecto.
