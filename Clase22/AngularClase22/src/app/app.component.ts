import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularClase22';
  nombre = "Axel";
  edad = 23;
  lenguajes = ["nodejs","angular2"];
  numeros = [100,200,300];
  edadBruno=15;

  usuarioS = "";
  passwordS = "";
  sueldosS=[0,0,0]

  CheckUser(){
    if(this.usuarioS == "Juan" && this.passwordS == "Perez"){
      return "Usuario administrador activo"
    }
  }

  CalcularSueldo(){
    var sueldoTotal = parseInt(this.sueldosS[0])+parseInt(this.sueldosS[1])+parseInt(this.sueldosS[2]);
    return sueldoTotal;
  }

  MayorEdad(edad){
    if(edad >= 18){
      return "Es mayor de edad";
    }
    else{
      return "Es menor de edad";
    }
  }

  ModificarNombre(){
    if(this.nombre=="Juan"){
      return "Bienvenido Juan";
    }else{
      return "Vos no sos Juan";
    }
  }
}
