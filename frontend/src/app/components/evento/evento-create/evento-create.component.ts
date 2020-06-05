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
  casas : Casa[]

 evento : Evento = {
   nome: '',
   descricao: '',
   dtEvento: null,
   estoque_ingresso: null,
   valor: null,
   casa: null,
   imagemEncoded: '',
 }

  constructor(private eventoService: EventoService,
              private router: Router,
              private casaService: CasaService) { }

  ngOnInit(): void {
    this.casaService.read().subscribe(casas =>{
      this.casas = casas 
      console.log(casas)
  })
}

  createEvento(): void{
    this.eventoService.create(this.evento).subscribe(() =>{
      
      this.eventoService.showMessage('Evento cadastrado com sucesso!')
      this.router.navigate(['/evento'])
    })

  }
  cancelEvento(): void{
    this.router.navigate(['/evento'])
  }

}
