import { Casa } from './../casa.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CasaService } from './../casa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casa-update',
  templateUrl: './casa-update.component.html',
  styleUrls: ['./casa-update.component.css']
})
export class CasaUpdateComponent implements OnInit {

  casa : Casa;
  
  constructor(private casaService : CasaService,
              private router : Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.casaService.readById(id).subscribe(casa =>{
      this.casa = casa
    })
  }

  updateCasa(): void{
    this.casaService.update(this.casa).subscribe(() =>{
      this.casaService.showMessage('Casa de Show Alterada com sucesso!')
      this.router.navigate(['/casa'])
    })

  }

  cancelCasa(): void{
    this.router.navigate(['/casa'])
  }

}
