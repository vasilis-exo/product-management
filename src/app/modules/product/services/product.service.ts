import { Injectable } from '@angular/core';
// HttpClient - Error Handing Imports
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';
import { IProduct } from '../interfaces/product';


@Injectable()
export class ProductService {

	private apiUrl = environment.productApiUrl;

	constructor(private http: HttpClient) {
		//console.log(`API URL = ${this.apiUrl}`);
	}

	getProducts(): Observable<IProduct[]> {
		return this.http.get<IProduct[]>(this.apiUrl)
			.pipe(
				retry(3), // retry a failed request up to 3 times
				catchError(this.handleError) // then handle the error
			);
	}

	getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
			.map( (products: IProduct[]) => products.find(prd => prd.productId === id));
	}

	private handleError(err: HttpErrorResponse) {
		//console.log(err);
		let errorMessage = '';
		if (err.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			errorMessage = `An error occurred: ${err.error.message}`;
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
		}
		console.error(errorMessage);
		return new ErrorObservable(errorMessage);
	}

}
