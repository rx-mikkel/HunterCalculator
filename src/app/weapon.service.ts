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
			speed: 3.4
		},
		{
			name: 'Bloodseeker',
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'rare',
			dmgMin: 85,
			dmgMax: 128,
			speed: 3.3
		},
		{
			name: 'Nerubian Slavemaker',
			icon: '../assets/build/images/nerub.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 128,
			dmgMax: 238,
			speed: 3.2
		},
		{
			name: "Grand Marshal's Repeater",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 107,
			dmgMax: 162,
			speed: 2.9
		},
		{
			name: "High Warlord's Crossbow",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 107,
			dmgMax: 162,
			speed: 2.9
		},
		{
			name: 'Larvae of the Great Worm',
			icon: '../assets/build/images/rifle.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 103,
			dmgMax: 192,
			speed: 3.0
		},
		{
			name: 'Soulstring',
			icon: '../assets/build/images/string.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 123,
			dmgMax: 229,
			speed: 2.9
		},
		{
			name: 'Crossbow of Imminent Doom',
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 103,
			dmgMax: 155,
			speed: 3.1
		},
		{
			name: 'Polished Ironwood Crossbow',
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 101,
			dmgMax: 153,
			speed: 3.1
		},
		{
			name: "Fahrad's Reloading Repeater",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'rare',
			dmgMin: 85,
			dmgMax: 128,
			speed: 3.2
		},
		{
			name: "Rhok'delar, Longbow of the Ancient Keepers",
			icon: '../assets/build/images/rokh.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 89,
			dmgMax: 166,
			speed: 2.9
		},
		{
			name: "Huhuran's Stinger",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 87,
			dmgMax: 163,
			speed: 2.7
		},
		{
			name: "Malgen's Long Bow",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'rare',
			dmgMin: 63,
			dmgMax: 118,
			speed: 2.9
		},
		{
			name: "Hoodoo Hunting Bow",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'rare',
			dmgMin: 68,
			dmgMax: 128,
			speed: 2.8
		},
		{
			name: "The Purifier",
			icon: '../assets/build/images/rifle.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 71,
			dmgMax: 132,
			speed: 3.0
		},
		{
			name: "Carapace Spine Crossbow",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'rare',
			dmgMin: 82,
			dmgMax: 124,
			speed: 3.3
		},
		{
			name: "Steelarrow Crossbow",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'uncommon',
			dmgMin: 29,
			dmgMax: 45,
			speed: 3.4
		},
		{
			name: "Satyr's Bow",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'rare',
			dmgMin: 50,
			dmgMax: 93,
			speed: 2.4
		},
		{
			name: "Blackcrow",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'rare',
			dmgMin: 77,
			dmgMax: 117,
			speed: 3.2
		},
		{
			name: "Verdant Keeper's Aim",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'rare',
			dmgMin: 53,
			dmgMax: 100,
			speed: 2.8
		},
		{
			name: "Dwarven Hand Cannon",
			icon: '../assets/build/images/rifle.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 66,
			dmgMax: 124,
			speed: 2.9
		},
		{
			name: "Hurricane",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 34,
			dmgMax: 63,
			speed: 1.6
		},
		{
			name: "Striker's Mark",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 69,
			dmgMax: 129,
			speed: 2.5
		},
		{
			name: "Core Marksman Rifle",
			icon: '../assets/build/images/rifle.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 64,
			dmgMax: 120,
			speed: 2.5
		}
	]

	getWeapons() {
		return this.weapons;
	}
}