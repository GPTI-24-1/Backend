# Backend


# Configurar Postgres
- `sudo -u postgres psql` para inicializar psql
- `du` para revisar todos los Users 
- `l` para revisar todas las BDD creadas 
- `sudo -u postgres createuser --superuser gpti_user` para crear el usuario 
- `sudo -u postgres createdb gpti_development` para crear el database
- `ALTER USER gpti_user WITH PASSWORD 'gpti';` para crear la clave (se debe correr dentro del entorno postgres)
- `psql -U gpti_user -d gpti_development -h 127.0.0.1` para conectarse a la BDD

# Como correr la API

- `yarn` para instalar dependencias.
- `sudo service postgresql start` levantar postgres en local. (Si no te reconoce el comando, debes instalar postgres en tu computador)
- `yarn sequelize-cli db:create` Crear base de datos de desarrollo.
- `yarn sequelize-cli db:migrate` Correr migraciones (crear tabla en DB)
- `yarn sequelize-cli db:seed:all` Llenar las tablas con seeds.
- `yarn dev` Levantar servidor.

## Crear tablas
Deben ser en este mismo orden, para evitar errores en las migraciones.

### User
- `yarn sequelize-cli model:generate --name User --attributes mail:string,password:string,rut:integer`
### Shops
- `yarn sequelize-cli model:generate --name Shops --attributes name:string,description:string,phone:integer,address:string,link_address:string,latitude:float,longitude:float`
### Likes [Relacion N:N]
- `yarn sequelize-cli model:generate --name Likes --attributes rut:integer,shop_id:integer`