import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Data } from 'src/app/models/respPopulares';
import { PeliculaService } from 'src/app/services/peliculasService';
import { DataActores } from '../../models/respActores';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'
  ]
})
export class PeliculasComponent implements OnInit {

  idPelicula : string = "";
  pelicula : Data | undefined;
  actores : DataActores[] | undefined;
  pathImagen : string = "";

  constructor(private activatedRoute: ActivatedRoute , private peliculaService : PeliculaService , private spinner: NgxSpinnerService) { 

    this.activatedRoute.params.subscribe(params => {
      this.idPelicula = params.id;
    });

  this.buscarPelicula();

  
  this.peliculaService.actorsByMovie(this.idPelicula).subscribe( res => {
    this.spinner.show();
    
    this.pathImagen = res.imageBaseUrl;

    res.data.forEach(actor => {
  
      if(actor.profile_path != null){
        actor.profile_path = this.pathImagen+actor.profile_path
        
      }else{
        actor.profile_path = "../../../assets/images/notperson.jpg"
      }

     });

    this.actores = res.data;

     this.spinner.hide();

})



  }

  ngOnInit(): void {

    
  }

  buscarPelicula(){

    this.spinner.show();

    this.peliculaService.popularMovies().subscribe( res => {
      this.pathImagen = res.imageBaseUrl;
      res.data.forEach(element => {
           if(element.id.toString() === this.idPelicula){
             this.pelicula = element
           }
      });  

     
  })

  this.spinner.show();

  this.peliculaService.moviesNowPlaying().subscribe( res => {

    this.pathImagen = res.imageBaseUrl;
    res.data.forEach(element => {
         if(element.id.toString() === this.idPelicula){
           this.pelicula = element
         }
    });  

    this.spinner.hide()
})

    

  }

}
