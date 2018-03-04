import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module'; // Application routes

// Components
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
// Pipes
import { ProductFilterPipe } from './pipes/product-filter.pipe';
// Services
import { ProductService } from './services/product.service';
// Guards
import { ProductGuard } from './guards/product.guard';

@NgModule({
  imports: [
	SharedModule,
	ProductRoutingModule
  ],
  declarations: [
	  ProductListComponent,
	  ProductFilterPipe,
	  ProductDetailComponent
  ],
  providers: [
	  ProductService,
	  ProductGuard
  ]
})
export class ProductModule { }
