import { Injectable } 	from '@angular/core';

@Injectable()
export class WeaponService {
	
	constructor(
	) { }

	weapons = [
		{
			name: "Ashjre'thul, Crossbow of Smiting",
			icon: '../assets/build/images/ashj.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 124,
			dmgMax: 186,
			speed: 3.4,
			recommended: true
		},
		{
			name: 'Bloodseeker',
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'rare',
			dmgMin: 85,
			dmgMax: 128,
			speed: 3.3,
			recommended: true

		},
		{
			name: 'Nerubian Slavemaker',
			icon: '../assets/build/images/nerub.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 128,
			dmgMax: 238,
			speed: 3.2,
			recommended: true
		},
		{
			name: "Grand Marshal's Repeater",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 107,
			dmgMax: 162,
			speed: 2.9,
			recommended: true
		},
		{
			name: "High Warlord's Crossbow",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 107,
			dmgMax: 162,
			speed: 2.9,
			recommended: true

		},
		{
			name: 'Larvae of the Great Worm',
			icon: '../assets/build/images/rifle.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 103,
			dmgMax: 192,
			speed: 3.0,
			recommended: true
		},
		{
			name: 'Soulstring',
			icon: '../assets/build/images/string.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 123,
			dmgMax: 229,
			speed: 2.9,
			recommended: true
		},
		{
			name: 'Crossbow of Imminent Doom',
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 103,
			dmgMax: 155,
			speed: 3.1,
			recommended: false
		},
		{
			name: 'Polished Ironwood Crossbow',
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 101,
			dmgMax: 153,
			speed: 3.1,
			recommended: false
		},
		{
			name: "Fahrad's Reloading Repeater",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'rare',
			dmgMin: 85,
			dmgMax: 128,
			speed: 3.2,
			recommended: true
		},
		{
			name: "Rhok'delar, Longbow of the Ancient Keepers",
			icon: '../assets/build/images/rokh.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 89,
			dmgMax: 166,
			speed: 2.9,
			recommended: true
		},
		{
			name: "Huhuran's Stinger",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 87,
			dmgMax: 163,
			speed: 2.7,
			recommended: false
		},
		{
			name: "Malgen's Long Bow",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'rare',
			dmgMin: 63,
			dmgMax: 118,
			speed: 2.9,
			recommended: false
		},
		{
			name: "Hoodoo Hunting Bow",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'rare',
			dmgMin: 68,
			dmgMax: 128,
			speed: 2.8,
			recommended: false
		},
		{
			name: "The Purifier",
			icon: '../assets/build/images/rifle.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 71,
			dmgMax: 132,
			speed: 3.0,
			recommended: false
		},
		{
			name: "Carapace Spine Crossbow",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'rare',
			dmgMin: 82,
			dmgMax: 124,
			speed: 3.3,
			recommended: true
		},
		{
			name: "Steelarrow Crossbow",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'uncommon',
			dmgMin: 29,
			dmgMax: 45,
			speed: 3.4,
			recommended: false
		},
		{
			name: "Satyr's Bow",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'rare',
			dmgMin: 50,
			dmgMax: 93,
			speed: 2.4,
			recommended: false
		},
		{
			name: "Blackcrow",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'rare',
			dmgMin: 77,
			dmgMax: 117,
			speed: 3.2,
			recommended: true
		},
		{
			name: "Verdant Keeper's Aim",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'rare',
			dmgMin: 53,
			dmgMax: 100,
			speed: 2.8,
			recommended: false
		},
		{
			name: "Dwarven Hand Cannon",
			icon: '../assets/build/images/rifle.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 66,
			dmgMax: 124,
			speed: 2.9,
			recommended: true
		},
		{
			name: "Hurricane",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 34,
			dmgMax: 63,
			speed: 1.6,
			recommended: false
		},
		{
			name: "Striker's Mark",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 69,
			dmgMax: 129,
			speed: 2.5,
			recommended: false
		},
		{
			name: "Core Marksman Rifle",
			icon: '../assets/build/images/rifle.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 64,
			dmgMax: 120,
			speed: 2.5,
			recommended: false
		},
		{
			name: "Dragonbreath Hand Cannon",
			icon: '../assets/build/images/rifle2.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 86,
			dmgMax: 160,
			speed: 2.8,
			recommended: true
		},
		{
			name: "Heartstriker",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 80,
			dmgMax: 149,
			speed: 2.6,
			recommended: false
		},
		{
			name: "Blastershot Launcher",
			icon: '../assets/build/images/rifle3.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 73,
			dmgMax: 136,
			speed: 2.6,
			recommended: false
		}
	]

	getWeapons() {
		return this.weapons;
	}
}