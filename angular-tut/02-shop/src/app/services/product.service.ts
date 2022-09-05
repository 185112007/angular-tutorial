import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {tap, catchError} from "rxjs/operators";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  path: string = "http://localhost:3000/products";

  getProducts(categoryId?: number):Observable<Product[]>{
    let url:string = this.path;
    if (categoryId){
      url = url + "?categoryId=" + categoryId;
    }

    return this.http.get<Product[]>(url).pipe(
      tap(data => {
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
