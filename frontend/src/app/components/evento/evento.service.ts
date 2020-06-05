import { Evento } from './evento.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs'; 
import { Casa } from '../casa/casa.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  baseUrl = "http://localhost:8080/api/evento/ "

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

    showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg,'Fechar',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    });
  }

  create(evento : Evento) : Observable<Evento>{
     console.log(evento)
    return this.http.post<Evento>(this.baseUrl, evento).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read() : Observable<Evento[]>{

    return this.http.get<Evento[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Evento>{
    const url = `${this.baseUrl}${id}`
      return this.http.get<Evento>(url).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
  }

  update(evento : Evento): Observable<Evento>{
    const url = `${this.baseUrl}${evento.id}`
    return this.http.put<Evento>(url, evento).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  updateEventoImagem(evento: Evento): Observable<Evento> {
    const url = `${this.baseUrl}/imagem/${evento.id}`
    return this.http.post<Evento>(url, evento).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
    }

  readCasa(): Observable<Casa[]>{
    return this.http.get<Casa[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
    }

    delete(id: number): Observable<Evento> {
      const url = `${this.baseUrl}${id}`
      return this.http.delete<Evento>(url).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
      
    }
    errorHandler(e: any): Observable<any>{
      this.showMessage('Ocorreu um erro !', true)
        return EMPTY
    }
}
