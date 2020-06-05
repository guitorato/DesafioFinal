import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-crud',
  templateUrl: './evento-crud.component.html',
  styleUrls: ['./evento-crud.component.css']
})
export class EventoCrudComponent implements OnInit {

  constructor(private router : Router, headerService : HeaderService) {
    headerService.headerData = {
      title: 'Evento',
      icon: 'store',
      routeUrl: '/evento'
   }}

  ngOnInit(): void {
  }

  navigateToEventoCreate(): void {
    this.router.navigate(['/evento/evento-create'])
  }
}
