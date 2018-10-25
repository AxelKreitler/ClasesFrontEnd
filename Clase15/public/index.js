var dato={
    //objetos, arrays, variables comunes
    "nombre": "Juan",
    "edad": 21,
    "apellido": "Perez",
    "dni": "38383838"
}

document.write("Nombre completo: " + dato.nombre + " " + dato.apellido + " DNI: " +dato.dni+ " Edad: " +dato.edad+ "<br>");

var alumno={
    "nombre": "Leslo",
    "apellido": "panaflex",
    "lenguajes": ["HTML5","CSS","JAVASCRIPT","MYSQL"]
}

document.write("Informacion de Alumno ");
document.write(alumno.lenguajes[2] + "<br>");

var alumnos={
    "curso":"PWI",
    "informacion": [
        {"nombres":["Nahuel","Pedro"],"edad":20},
        {"nombre":"Jorge","edad":22,"estado":"soltero"}
    ]
}

document.write(alumnos.informacion[0].nombres[1]);