import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 // nombre="Leonel";

  // estamos creando un objeto con varias propiedades y que accedemos
  // otra manera de hacer data banding 

/*
persona: any={
  nombre:'Leonel',
  apellido:'Telon',
  edad:'35' */
  /*

  getSuma():number{
    return 10 + 25 ;

  }*/

  saludo='HOLA MUNDO ';

  urlImg='https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/angularjs-logo-blog-header_0.jpg?itok=CUBxFqam'


  numero1 = 0 ;
  numero2 = 0 ;

  suma(): number {

    return  this.numero1 + this.numero2  

  }



}


