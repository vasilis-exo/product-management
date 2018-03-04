import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../../interfaces/product';

// Import ProductService
import { ProductService } from '../../services/product.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail';
	product: IProduct;
	errorMessage: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _productService: ProductService  //Injecting the service
	) {
		// this._route.params.subscribe(
		// 	params => console.log(params["id"])
		// );
	}

	ngOnInit() {
		// property paramMap that allows you to either get a particular parameter by using the method get() or get all parameters by invoking getAll()
		const id = Number(this._route.snapshot.paramMap.get('id')); // Number converts string to an integer
		if (id) {
			this.getProduct(id);
		}

	}

	//Get product detail from service
	getProduct(id: number) {
		this._productService.getProduct(id)
			.subscribe(
				product => {
					this.product = product;
					console.log(this.product);
				},
				error => this.errorMessage = <any>error
			);
	}

	onBack(): void {
		this._router.navigate(['/products']);
	}

}
