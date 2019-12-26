import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { startWith, map } from 'rxjs/operators';

import { WeaponService }      from './weapon.service';

@Component({
  selector: 'base-stats',
  templateUrl: './base-stats.component.html'
})
export class BaseStatsComponent implements OnInit {
	constructor(
		private weaponService: WeaponService
	) { 
		this.weaponControl = new FormControl();
	    this.filteredWeapons = this.weaponControl.valueChanges
		.pipe(
			startWith(''),
			map(weapon => weapon ? this.filterWeapons(weapon) : this.weapons.slice())
		);
	}

	@Input() phase: number;
	@Input() rcomWeapons: boolean;

	weaponControl: FormControl;
	filteredWeapons: any;

	displayWeaponOverlay: boolean = false;

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

	collapsed: boolean = false;

	slaying: number = 0;
	rws: number = 5;
	mortal: number = 5;
	barrage: number = 3;
	gs: number = 0;

	baseAP: number = 1500;
	criticalStrikeChance: number = 23.5;
	ammo: number = 17.5;
	rangedScope: number = 7;

	agility: number = 4;

	weapons: any[];

	selectedWeapon: any;

	ngOnInit() {
		if(localStorage['baseAP']) {
			this.baseAP = localStorage['baseAP'];
		}
		if(localStorage['criticalStrikeChance']) {
			this.criticalStrikeChance = localStorage['criticalStrikeChance'];
		}
		if(localStorage['ammo']) {
			this.ammo = localStorage['ammo'];
		}
		if(localStorage['rangedScope']) {
			this.rangedScope = localStorage['rangedScope'];
		}

		this.weapons = this.weaponService.getWeapons();
		this.selectedWeapon = this.weapons[0];
		if(localStorage['selectedWeapon'] && this.weapons) {
			for (let weapon of this.weapons) {
				if(weapon.name == localStorage['selectedWeapon']) {
					this.selectedWeapon = weapon;
				}
			}
		}

		if(localStorage['slaying']) {
			this.slaying = localStorage['slaying'];
		}
		if(localStorage['rws']) {
			this.rws = localStorage['rws'];
		}
		if(localStorage['mortal']) {
			this.mortal = localStorage['mortal'];
		}
		if(localStorage['barrage']) {
			this.barrage = localStorage['barrage'];
		}
		if(localStorage['gs']) {
			this.gs = localStorage['gs'];
		}

		for(let talent of this.talents) {
			if (talent.name == 'Slaying') {
				talent.currentRank = this.slaying;
			}
			if(talent.id == 'rws') {
				talent.currentRank = this.rws;
			}
			if(talent.name == 'Mortal shots') {
				talent.currentRank = this.mortal;
			}
			if(talent.name == 'Barrage') {
				talent.currentRank = this.barrage;
			}
			if(talent.id == 'gs') {
				talent.currentRank = this.gs;
			}
		}

		//setInterval(() => this.saveToLocalStorage(), 1100);
	}

	increaseTalent(talent) {
		if(talent.currentRank < talent.ranks) {
			talent.currentRank = talent.currentRank + 1;
		}

		this.saveToLocalStorage();
	}

	toggleMaxTalent(talent) {
		if(talent.currentRank == talent.ranks) {
			talent.currentRank = 0;
		}
		else {
			talent.currentRank = talent.ranks
		}
		if (talent.name == 'Slaying') {
			this.slaying = talent.currentRank;
		}
		if(talent.id == 'rws') {
			this.rws = talent.currentRank;
		}
		if(talent.name == 'Mortal shots') {
			this.mortal = talent.currentRank;
		}
		if(talent.name == 'Barrage') {
			this.barrage = talent.currentRank;
		}
		if(talent.id == 'gs') {
			this.gs = talent.currentRank;
		}

		this.saveToLocalStorage()
	}

	setSelectedWeapon(weapon) {
		this.selectedWeapon = weapon;
		this.displayWeaponOverlay = false;

		this.saveToLocalStorage()
	}

	toggleWeaponOverlay() {
		this.displayWeaponOverlay = !this.displayWeaponOverlay;
	}

	addAgility() {
		this.baseAP = +this.baseAP + (+this.agility)*2;
		this.criticalStrikeChance = +(+this.criticalStrikeChance + (+this.agility)/53).toFixed(4);

		this.agility = 1;

		this.saveToLocalStorage()
	}

	saveToLocalStorage() {
		localStorage['baseAP'] = this.baseAP;
		localStorage['criticalStrikeChance'] = this.criticalStrikeChance;
		localStorage['ammo'] = this.ammo;
		localStorage['rangedScope'] = this.rangedScope;

		localStorage['selectedWeapon'] = this.selectedWeapon.name;

		localStorage['slaying'] = this.slaying;
		localStorage['rws'] = this.rws;
		localStorage['mortal'] = this.mortal;
		localStorage['barrage'] = this.barrage;
		localStorage['gs'] = this.gs;
	}

	toggleCollapsed() {
		this.collapsed = !this.collapsed;
	}

	/* searches only strictly matching
	filterWeapons(name: string) {
		return this.weapons.filter(weapon =>
	  	weapon.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
	}
	*/

	// search for matches anywhere in the string
	filterWeapons(val: string) {
		return val ? this.weapons.filter((weapon) => new RegExp(val, 'gi').test(weapon.name)) : this.weapons;
	}
}
