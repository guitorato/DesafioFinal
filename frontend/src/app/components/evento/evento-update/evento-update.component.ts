import { Casa } from './../../casa/casa.model';
import { CasaService } from './../../casa/casa.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventoService } from './../evento.service';
import { Evento } from './../evento.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-update',
  templateUrl: './evento-update.component.html',
  styleUrls: ['./evento-update.component.css']
})
export class EventoUpdateComponent implements OnInit {
  
  evento: Evento
  idCasa = 0;
  casas: Casa[]
  
  constructor(private casaService : CasaService,
              private eventoService : EventoService,
              private router : Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.casaService.read().subscribe(casas => {

      this.casas = casas

      const id = this.route.snapshot.paramMap.get('id')
      this.eventoService.readById(id).subscribe(evento => {
        this.evento = evento
      })
    })
  }

  updateEvento(): void{

    const casa = new Casa();

    casa.id = this.idCasa;
    this.evento.casaDeShow = casa;

    this.eventoService.update(this.evento).subscribe(() =>{
      this.eventoService.showMessage('Evento Alterado com sucesso!')
      this.router.navigate(['/evento'])
    })

  }

  cancelEvento(): void{
    this.router.navigate(['/evento'])
  }

}