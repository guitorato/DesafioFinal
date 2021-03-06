import { CasaService } from './../../casa/casa.service';
import { Casa } from './../../casa/casa.model';
import { map } from 'rxjs/operators';
import { EventoService } from './../evento.service';
import { Evento } from './../evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-read',
  templateUrl: './evento-read.component.html',
  styleUrls: ['./evento-read.component.css']
})
export class EventoReadComponent implements OnInit {

  eventos : Evento[]
  casa : Casa
    
  displayedColumns = ['id','nome','descricao','dtEvento','estoque_ingresso','valor','casa','action']

  constructor(private eventoService : EventoService,
              private casaSerivce : CasaService) { }

  ngOnInit(): void {

    this.eventoService.read().subscribe(eventos =>{
      this.eventos = eventos
      console.log(eventos)
    })
  }

}
