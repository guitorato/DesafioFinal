import { map, catchError } from 'rxjs/operators';
import { Casa } from './casa.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  baseUrl = "http://localhost:8080/api/casa/"


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

  create(casa : Casa) : Observable<Casa> {

    return this.http.post<Casa>(this.baseUrl, casa).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read(): Observable<Casa[]>{

    return this.http.get<Casa[]>(this.baseUrl)
  }

  readById(id: string): Observable<Casa>{
    const url = `${this.baseUrl}/${id}`
      return this.http.get<Casa>(url).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      );
  }

  update(casa : Casa): Observable<Casa>{
    const url = `${this.baseUrl}${casa.id}`
    return this.http.put<Casa>(url, casa).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Casa> {
    const url = `${this.baseUrl}${id}`
    return this.http.delete<Casa>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
    
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro !', true)
      return EMPTY
  }
}
