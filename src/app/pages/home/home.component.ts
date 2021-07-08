import { Component, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Data } from 'src/app/models/respPopulares';
import { PeliculaService } from '../../services/peliculasService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resultadoEstrenos : Data[] | undefined ;
  resultadoPopulares : Data[]| undefined  ;
  pathImagen : string = "";

  @HostListener('window:scroll')
  onWindowScroll(){
    
  }



  constructor( private peliculaService : PeliculaService , private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    

    this.peliculaService.moviesNowPlaying().subscribe( res => {

      this.spinner.show();

      this.pathImagen = res.imageBaseUrl;
     
      res.data.forEach(pelicula => {
      
        if(pelicula.backdrop_path != null){
          pelicula.backdrop_path = this.pathImagen+pelicula.backdrop_path
          
        }else{
          pelicula.backdrop_path = "../../../assets/images/notfound.jpeg"
        }
  
       });

       this.resultadoEstrenos = res.data;
       this.spinner.hide();
    })

    this.peliculaService.popularMovies().subscribe( res => {

      this.spinner.show()
    

     res.data.forEach(pelicula => {
      
      if(pelicula.backdrop_path != null){
        pelicula.backdrop_path = this.pathImagen+pelicula.backdrop_path
        
      }else{
        pelicula.backdrop_path = "../../../assets/images/notfound.jpeg"
      }

     });

     this.resultadoPopulares = res.data;

     this.spinner.hide();


    })
  }


}
