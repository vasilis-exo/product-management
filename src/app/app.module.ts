// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // root Routes
import { ProductModule } from './modules/product/product.module'; // product Module

// Components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		ProductModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
