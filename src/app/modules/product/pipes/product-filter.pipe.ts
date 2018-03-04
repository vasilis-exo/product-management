import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Pipe({
	name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {

	transform(value: IProduct[], filterBy: string): IProduct[] {
		// local variable
		let response: IProduct[];

		// converts all to lowercase
		filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
		//console.log(`filterBy = ${filterBy}`);

		if (filterBy) {
			response = value.filter((product: IProduct) => {
				if (product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) {
					return product;
				}
			});
		} else {
			response = value;
		}

		return response;
	}

}
