# -institutional-system

### Prueba Tecnica Uniber NodeJs

creamos la carpeta server, ejecutamos cd server y npm init. luego instalamos paquetes y dependencias.

npm install body-parser sequelize mysql2 express
npx sequelize-cli init (crea las carpetas models, migrations, config, seeders)

npx sequelize-cli model:generate --name Student --attributes firstName:string,lastName:string,age:string (creamos el modelo Student)

En Mysql Workbench creamos un nuevo schema llamado uniber  y luego ejecutamos:
npx sequelize-cli db:migrate (con este comando hacemos la migraciones)
<hr>
<img width="551" alt="Screenshot" src="https://user-images.githubusercontent.com/78902757/167626120-833d6fb1-94d1-421f-8c16-03cdf3ca0879.png">

creamos las carpetas controller y routes donde vamos a empezar a testear nuestros endpoints.


<img width="593" alt="endpoint1" src="https://user-images.githubusercontent.com/78902757/167626236-b9d65ac8-2dac-4778-9231-3d071c680317.png">
<hr>
<img width="591" alt="endpoint2" src="https://user-images.githubusercontent.com/78902757/167626360-874a209b-65af-4473-9322-e850fa3d56ef.png">
