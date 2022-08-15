# TestSoyyo
Instrucciones para la ejecucion de la api:
1.Importar el repositorio
2.Abrir en visual studio code
3.Abrir una nueva terminar ya sea dentro de vsc o ya sea mediante gitbash
4.en este paso realizaremos la instalacion con npm i
  4.1 npm i dotensv express
  4.2 npm i @babel/cli @babel/core @babel/node @babel/node @babel/preset-env axios morgan nodemon -D //esto lo hacemos para asegurarnos que ningun package falte
5.Al tener configurado todo vamos a la consola e iniciamos la API con npm run dev y nos aseguramos que en la consola salga el mensaje: "Server on port 4000" al tener este mensaje ya sabremos que la API esta arriba.
6.Ahora nos dirigiremos al POSTMAN y utilizaremos la siguiente configuracion: metodo 'POST' url:http://localhost:4000/api/filter
7.Iremos a mandar un body tipo json y escogeremos un startId y un endId estos seran los numeros que conformaran el rango de la busqueda el body json sera:
    {
      "startId":numero,
      "endId":numero
    }
8.mandaremos la solicitud y nos respondera con algo similar a esto en orden alfabetico mediante el nombre de la entidad o cliente
        [
    {
        "entityId": 2,
        "name": "Bancolombia",
        "identificationNumber": "987654321",
        "expirationDate": "2030-10-27",
        "contactName": "Mauricio Serna Florez",
        "logo": "logo_entidad_bancolombia.png"
    },
    {
        "entityId": 3,                            //en este caso el startId es 1 y el endId es 3.
        "name": "Mi Aguila",
        "identificationNumber": "9008508671",
        "expirationDate": "2030-10-27",
        "contactName": "Manuela Castro",
        "logo": ""
    },
    {
        "entityId": 1,
        "name": "Tuya",
        "identificationNumber": "123456789",
        "expirationDate": "2030-10-27",
        "contactName": "Ana Maria Palacio",
        "logo": "logo_entidad_tuya.png"
    }
]
