import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { WeaponService }      from './weapon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	constructor(
		
	) { }

	compareComponents: any = [];

	phases: any = [1,2,3,4,5,6];
	selectedPhase: number = 3;
	recommendedWeapons: boolean = false;

	selectedWeapon: any = {
		name: "Ashjre'thul, Crossbow of Smiting",
		icon: '../assets/build/images/ashj.jpg',
		type: 'Crossbow',
		quality: 'epic',
		dmgMin: 124,
		dmgMax: 186,
		speed: 3.4
	}

	talents = [
		{
			id: 'slaying',
			name: 'Slaying',
			icon: '../assets/build/images/slay.jpg',
			ranks: 3,
			tooltip: '',
			currentRank: 0
		},
		{
			id: 'rws',
			name: 'Ranged Weapon Specialization',
			icon: '../assets/build/images/rws.jpg',
			ranks: 5,
			tooltip: '',
			currentRank: 5
		},
		{
			id: 'ms',
			name: 'Mortal shots',
			icon: '../assets/build/images/mortal.jpg',
			ranks: 5,
			tooltip: '',
			currentRank: 5
		},
		{
			id: 'barrage',
			name: 'Barrage',
			icon: '../assets/build/images/barrage.jpg',
			ranks: 3,
			tooltip: '',
			currentRank: 3
		},
		{
			id: 'gs',
			name: 'Giantstalker 8/8',
			icon: '../assets/build/images/gs.jpg',
			ranks: 1,
			tooltip: '',
			currentRank: 0
		}
	];

	ngOnInit() {
		
	}

	addCompareCalculator() {
		var comparisons = this.compareComponents.length + 1;
		var compareComponent = {
			name: 'Alternative setup ' + comparisons.toString()
		}
		this.compareComponents.push(compareComponent);
	}
}
