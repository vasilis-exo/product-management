import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-star',
	templateUrl: './star.component.html',
	styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
	// Input decorator
	@Input() rating: number;
	starWidth: number;
	starsTotal: number;

	// Output decorator
	@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

	constructor() {
		this.starsTotal = 5;
	}

	ngOnChanges() {
		// console.log(`starRating = ${this.rating}`);
		this.starWidth = this.getRating();
		// console.log(`starWidth = ${this.starWidth}%`);
	}

	onClick(): void {
		this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
	}

	getRating():number {
		// Get percentage
		const starPercentage = (this.rating / this.starsTotal) * 100;

		// Round to nearest 10
		let starPercentageRounded = `${Math.round(starPercentage / 10)* 10}`;

		// Set width of stars-inner to percentage
		return Number(starPercentageRounded);
	}

}
