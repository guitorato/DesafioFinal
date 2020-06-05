import { Casa } from './../casa.model';
import { CasaService } from './../casa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casa-delete',
  templateUrl: './casa-delete.component.html',
  styleUrls: ['./casa-delete.component.css']
})
export class CasaDeleteComponent implements OnInit {

  casa: Casa

  constructor(private casaService: CasaService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.casaService.readById(id).subscribe(casa => {
      this.casa = casa
    })
  }

  deleteCasa(): void {
    
    this.casaService.delete(this.casa.id).subscribe(() => {
      this.casaService.showMessage('Casa de Show Removida com Sucesso')
      this.cancelCasa()
    })
  }

  cancelCasa(): void {
    this.router.navigate(['/casa'])
  }
}