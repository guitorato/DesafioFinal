import { Cliente } from './../cliente.model';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  date = new FormControl(new Date());
    serializedDate = new FormControl((new Date()).toISOString());

  cliente: Cliente = {
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    senha: '',
    dtNascimento: null
  }

  constructor(private clienteService: ClienteService,
              private router: Router) { }

  ngOnInit(): void {
    
  }
  

  createCliente(): void{
    this.clienteService.create(this.cliente).subscribe(() =>{

      this.clienteService.showMessage('Usuário cadastrado com sucesso!')
      this.router.navigate(['/user'])
    })

  }
  cancelCliente(): void{
    this.router.navigate(['/user'])
  }

 
    
  }

