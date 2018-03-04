import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product';

// Import ProductService
import { ProductService } from '../../services/product.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	pageTitle: string = 'Product List';
	showImage: boolean = false;
	listFilter: string = '';
	// Product interface
	products: IProduct[];
	errorMessage: string;

	constructor(
		//Injecting the service
		private _productService: ProductService
	) {
		//console.log("constructor");
	}


	ngOnInit() {
		//console.log("OnInit");

		//Get All products from service
		this._productService.getProducts()
			.subscribe(
				products => this.products = products,
				error => this.errorMessage = <any>error
			);

	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	onRatingClicked(message: string): void {
		this.pageTitle = 'Product List ' + message;
	}

}
