import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente : Cliente;

  constructor(private clienteService : ClienteService,
              private router : Router,
              private route: ActivatedRoute) { }

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id')
  this.clienteService.readById(id).subscribe(cliente =>{
  this.cliente = cliente
});
}

updateCliente(): void{
this.clienteService.update(this.cliente).subscribe(() =>{
this.clienteService.showMessage('Usuário Alterada com sucesso!')
this.router.navigate(['/user'])
})

}

cancelCliente(): void{
  this.router.navigate(['/user'])
}

}
