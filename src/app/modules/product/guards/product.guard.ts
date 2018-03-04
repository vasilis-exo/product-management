import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductGuard implements CanActivate {

	constructor(
		private _route: Router
	) { }

	canActivate(route: ActivatedRouteSnapshot): boolean {
		console.log(route);
		let id = Number(route.url[1].path);

		// check if id is number and greater than 1
		if (isNaN(id) || id < 1) {
			alert("Invalid product Id");
			// start a new navigation to redirect to list page
			this._route.navigate(['/products']);
			// abort current navigation
			return false;
		} else {
			return true;
		}
	}

}
