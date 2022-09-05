import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Category} from "../model/category";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  path: string = "http://localhost:3000/categories";

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.path).pipe(
      tap(data =>{
        console.log(JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse){
    let errorMessage = "";
    if (err.error instanceof ErrorEvent){
      errorMessage = "Bir hata olustu " + err.error.message;
    }else{
      errorMessage = "Bir sistemsel hata";
    }
    return throwError(() => new Error(errorMessage));
  }
}
