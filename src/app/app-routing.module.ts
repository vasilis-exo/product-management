import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/******************************************
 *              Components                *
 ******************************************/
 import { WelcomeComponent } from './components/welcome/welcome.component';

/******************************************
 *               App Routes               *
 ******************************************/
const appRoutes: Routes = [
	{
		path: 'welcome',
		component: WelcomeComponent
	},
	{
		path: '',
		redirectTo: 'welcome',
		pathMatch: 'full'
	},
	{
		path: '',
		loadChildren: './modules/product/product.module#ProductModule'
	},
	{
		path: '**',
		redirectTo: 'welcome',
		pathMatch: 'full'
	},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
