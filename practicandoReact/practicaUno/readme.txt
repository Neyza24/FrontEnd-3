<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Integrando JSX con React</title>
</head>
<body>
    
    /*Vinculamos 3 script de JS a esta página:
    + El primer script descarga el paquete de React que le da acceso a la biblioteca de React 
    + El segundo script descarga el paquete de React DOM que le da acceso a la API de React DOM- en este caso la única función que utilizaremos de React DOM  es el render
    + Permite utilizar JSX en el navegador puesto que descarga babel que s uno de los compiladores de JS más utilizados y este se encarga de transpilar JSX a JS estandar
    
    Luego crearemos el div al que le asignaremos el id root, este nombre va por convención
    
    Ya para utilizar JSX es importante para que nuestro navegador peuda entender JSX, debemos escribir el código dentro deun script de tipo text/babel, de no hacer esto el código JSX no funcionará */
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <div id="root"></div>

    <script type="text/babel">



    </script>

</body>
</html>