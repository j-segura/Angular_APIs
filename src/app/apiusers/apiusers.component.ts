import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-apiusers',
  templateUrl: './apiusers.component.html',
  styleUrls: ['./apiusers.component.css']
})
export class ApiusersComponent implements OnInit{

  data: any[] = [];

  constructor( private apiService : ApiServiceService){}

  /* VOID significa que no retorna */
  ngOnInit(): void {

    this.fillData();

  }

  // cuando no pungo nada antes del nombre de la funcion toman la funcion como pubilca
  fillData() {

    /* me suscribo porque es un observable */
    this.apiService.getApi().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })

  }

}
