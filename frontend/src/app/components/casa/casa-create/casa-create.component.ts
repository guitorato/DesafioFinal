import { Casa } from './../casa.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CasaService } from '../casa.service';

@Component({
  selector: 'app-casa-create',
  templateUrl: './casa-create.component.html',
  styleUrls: ['./casa-create.component.css']
})
export class CasaCreateComponent implements OnInit {

  casa : Casa ={
    nome: '',
    capacidade: null,
    logradouro: '',
    complemento: '',
    numero: '',
    bairro: '',
    cidade: '',
    uf: '',
    cep: '',
    telefone: ''

  }

  constructor(private casaService : CasaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createCasa(): void{
    this.casaService.create(this.casa).subscribe(() =>{
      
      this.casaService.showMessage('Casa de Show cadastrado com sucesso!')
      this.router.navigate(['/casa'])
    })

  }
  cancelCasa(): void{
    this.router.navigate(['/casa'])
  }

}
