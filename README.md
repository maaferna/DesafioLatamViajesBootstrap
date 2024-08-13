Mi Portafolio Personal
Este es mi portafolio personal construido utilizando Bootstrap, Sass y npm. El proyecto incluye dos páginas principales: una página de inicio y una página de contacto.


Aplicar los siguientes pasos 

git clone https://github.com/maaferna/DesafioLatamBootstrapPortafolio.git

Estructura del Proyecto

mi-portafolio/
│
├── assets/
│   ├── css/
│   │   └── style.css          # Archivo CSS compilado desde Sass
│   ├── img/                   # Imágenes utilizadas en el proyecto
│   ├── js/
│   │   └── main.js            # JavaScript personalizado
│   ├── scss/
│   │   ├── style.scss         # Archivo principal de Sass
│   │   └── _variables.scss    # Archivo de variables de Sass
│   └── vendor/
│       └── bootstrap/         # Archivos de Bootstrap
│
├── index.html                 # Página principal del portafolio
├── contacto.html              # Página de contacto
├── package.json               # Configuración de npm
└── README.md                  # Documentación del proyecto

Tecnologías Utilizadas
Bootstrap: Framework CSS para un diseño responsive y componentes reutilizables.
Sass: Preprocesador CSS para una gestión más avanzada de estilos.
npm: Gestor de paquetes para la instalación y gestión de dependencias.


Instalación de dependencias.

Instalación
Clona el repositorio:

bash
git clone https://github.com/tu-usuario/mi-portafolio.git

Instala las dependencias:
npm install

Esto instalará todas las dependencias necesarias.

Desarrollo


Compilar Sass y ver cambios en tiempo real:
:
npx sass --watch assets/scss/main.scss:assets/css/style.css 

Esto compilará el archivo style.scss en style.css en la carpeta assets/css/.
Este comando observará los archivos Sass y los compilará automáticamente cada vez que guardes cambios.

Comandos aplicados para crear la estructura basica SASS del proyecto.

Comandos para inicializar un project SASS utilizando la metologia SASS

mkdir -p scss/{abstracts,base,components,layout,pages,themes,vendors}
touch scss/{abstracts/_variables.scss,abstracts/_mixins.scss,abstracts/_functions.scss}
touch scss/{base/_reset.scss,base/_typography.scss}
touch scss/{components/_buttons.scss,components/_cards.scss}
touch scss/{layout/_header.scss,layout/_footer.scss,layout/_navigation.scss,layout/_grid.scss}
touch scss/{pages/_home.scss,pages/_about.scss}
touch scss/themes/_theme.scss
touch scss/vendors/_bootstrap.scss
touch scss/main.scss