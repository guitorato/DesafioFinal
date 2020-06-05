import { CasaService } from './../casa.service';
import { Casa } from './../casa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casa-read',
  templateUrl: './casa-read.component.html',
  styleUrls: ['./casa-read.component.css']
})
export class CasaReadComponent implements OnInit {

  casas : Casa[]
  displayedColumns = ['id','nome','capacidade','cep',
                      'logradouro','complemento','numero',
                      'bairro','cidade','uf','telefone','action']

  constructor(private casaService : CasaService) { }

  ngOnInit(): void {
    this.casaService.read().subscribe(casas =>{
      this.casas = casas 
      console.log(casas)
  })
}

}
