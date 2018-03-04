import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/******************************************
 *              Components                *
 ******************************************/
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

/******************************************
 *              Guards                *
 ******************************************/
import { ProductGuard } from './guards/product.guard';

const routes: Routes = [
	{
		path: 'products',
		component: ProductListComponent
	},
    {
		path: 'product/:id',
		component: ProductDetailComponent,
		canActivate: [ProductGuard]
	}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule { }
