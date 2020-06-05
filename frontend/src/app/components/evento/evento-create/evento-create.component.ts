import { CasaService } from './../../casa/casa.service';
import { Casa } from './../../casa/casa.model';
import { Evento } from './../evento.model';
import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-create',
  templateUrl: './evento-create.component.html',
  styleUrls: ['./evento-create.component.css']
})
export class EventoCreateComponent implements OnInit {
  
  idCasa = 0;
  casas: Casa[]

 evento : Evento = {
   nome: '',
   descricao: '',
   dtEvento: null,
   estoque_ingresso: null,
   valor: null,
   casaDeShow: null,
   imagemProd: null
 }

  constructor(private eventoService: EventoService,
              private router: Router,
              private casaService: CasaService) { }

  ngOnInit(): void {
    
    this.casaService.read().subscribe(casas => {

      this.casas = casas
    })
}

  createEvento(): void{

    const casa = new Casa();
    casa.id = this.idCasa;
    this.evento.casaDeShow = casa;

    this.eventoService.create(this.evento).subscribe(() =>{
      
      console.log(this.evento)
      this.eventoService.showMessage('Evento cadastrado com sucesso!')
      this.router.navigate(['/evento'])
    })

  }
  cancelEvento(): void{
    this.router.navigate(['/evento'])
  }

}
