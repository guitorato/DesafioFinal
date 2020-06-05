import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casa-crud',
  templateUrl: './casa-crud.component.html',
  styleUrls: ['./casa-crud.component.css']
})
export class CasaCrudComponent implements OnInit {

  constructor(private router : Router, headerService : HeaderService) {
    headerService.headerData = {
      title: 'Casa de Show',
      icon: 'home_work',
      routeUrl: '/casa'
    }
   }

  ngOnInit(): void {
  }

  navigateToCasaCreate(): void {
    this.router.navigate(['/casa/casa-create'])
  }
}
