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
			recommended: true,
			phase: 3
		},
		{
			name: 'Bloodseeker',
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'rare',
			dmgMin: 85,
			dmgMax: 128,
			speed: 3.3,
			recommended: true,
			phase: 3
		},
		{
			name: 'Nerubian Slavemaker',
			icon: '../assets/build/images/nerub.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 128,
			dmgMax: 238,
			speed: 3.2,
			recommended: true,
			phase: 6
		},
		{
			name: "Grand Marshal's Repeater",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 107,
			dmgMax: 162,
			speed: 2.9,
			recommended: true,
			phase: 2
		},
		{
			name: "High Warlord's Crossbow",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 107,
			dmgMax: 162,
			speed: 2.9,
			recommended: true,
			phase: 2

		},
		{
			name: 'Larvae of the Great Worm',
			icon: '../assets/build/images/rifle.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 103,
			dmgMax: 192,
			speed: 3.0,
			recommended: true,
			phase: 5
		},
		{
			name: 'Soulstring',
			icon: '../assets/build/images/string.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 123,
			dmgMax: 229,
			speed: 2.9,
			recommended: true,
			phase: 6
		},
		{
			name: 'Crossbow of Imminent Doom',
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 103,
			dmgMax: 155,
			speed: 3.1,
			recommended: false,
			phase: 5
		},
		{
			name: 'Polished Ironwood Crossbow',
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'epic',
			dmgMin: 101,
			dmgMax: 153,
			speed: 3.1,
			recommended: false,
			phase: 4
		},
		{
			name: "Fahrad's Reloading Repeater",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'rare',
			dmgMin: 85,
			dmgMax: 128,
			speed: 3.2,
			recommended: true,
			phase: 5
		},
		{
			name: "Rhok'delar, Longbow of the Ancient Keepers",
			icon: '../assets/build/images/rokh.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 89,
			dmgMax: 166,
			speed: 2.9,
			recommended: true,
			phase: 1
		},
		{
			name: "Huhuran's Stinger",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 87,
			dmgMax: 163,
			speed: 2.7,
			recommended: false,
			phase: 5
		},
		{
			name: "Malgen's Long Bow",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'rare',
			dmgMin: 63,
			dmgMax: 118,
			speed: 2.9,
			recommended: false,
			phase: 5
		},
		{
			name: "Hoodoo Hunting Bow",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'rare',
			dmgMin: 68,
			dmgMax: 128,
			speed: 2.8,
			recommended: false,
			phase: 4
		},
		{
			name: "The Purifier",
			icon: '../assets/build/images/rifle.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 71,
			dmgMax: 132,
			speed: 3.0,
			recommended: false,
			phase: 6
		},
		{
			name: "Carapace Spine Crossbow",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'rare',
			dmgMin: 82,
			dmgMax: 124,
			speed: 3.3,
			recommended: true,
			phase: 1
		},
		{
			name: "Steelarrow Crossbow",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'uncommon',
			dmgMin: 29,
			dmgMax: 45,
			speed: 3.4,
			recommended: false,
			phase: 1
		},
		{
			name: "Satyr's Bow",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'rare',
			dmgMin: 50,
			dmgMax: 93,
			speed: 2.4,
			recommended: false,
			phase: 2
		},
		{
			name: "Blackcrow",
			icon: '../assets/build/images/xbow.jpg',
			type: 'Crossbow',
			quality: 'rare',
			dmgMin: 77,
			dmgMax: 117,
			speed: 3.2,
			recommended: true,
			phase: 1
		},
		{
			name: "Verdant Keeper's Aim",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'rare',
			dmgMin: 53,
			dmgMax: 100,
			speed: 2.8,
			recommended: false,
			phase: 1
		},
		{
			name: "Dwarven Hand Cannon",
			icon: '../assets/build/images/rifle.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 66,
			dmgMax: 124,
			speed: 2.9,
			recommended: true,
			phase: 1
		},
		{
			name: "Hurricane",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 34,
			dmgMax: 63,
			speed: 1.6,
			recommended: false,
			phase: 1
		},
		{
			name: "Striker's Mark",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 69,
			dmgMax: 129,
			speed: 2.5,
			recommended: false,
			phase: 1
		},
		{
			name: "Core Marksman Rifle",
			icon: '../assets/build/images/rifle.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 64,
			dmgMax: 120,
			speed: 2.5,
			recommended: false,
			phase: 1
		},
		{
			name: "Dragonbreath Hand Cannon",
			icon: '../assets/build/images/rifle2.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 86,
			dmgMax: 160,
			speed: 2.8,
			recommended: true,
			phase: 3
		},
		{
			name: "Heartstriker",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 80,
			dmgMax: 149,
			speed: 2.6,
			recommended: false,
			phase: 3
		},
		{
			name: "Blastershot Launcher",
			icon: '../assets/build/images/rifle3.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 73,
			dmgMax: 136,
			speed: 2.6,
			recommended: false,
			phase: 1
		},
		{
			name: "Outrunner's Bow / Outrider's bow",
			icon: '../assets/build/images/bow.jpg',
			type: 'Bow',
			quality: 'rare',
			dmgMin: 54,
			dmgMax: 101,
			speed: 2.4,
			recommended: false,
			phase: 3
		},
		{
			name: "Mandokir's Sting",
			icon: '../assets/build/images/mandokir.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 68,
			dmgMax: 127,
			speed: 2.6,
			recommended: false,
			phase: 4
		},
		{
			name: "Gurubashi Dwarf Destroyer",
			icon: '../assets/build/images/rifle10.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 76,
			dmgMax: 142,
			speed: 2.8,
			recommended: true,
			phase: 4
		},
		{
			name: "Bow of Taut Sinew",
			icon: '../assets/build/images/string.jpg',
			type: 'Bow',
			quality: 'epic',
			dmgMin: 59,
			dmgMax: 111,
			speed: 2.2,
			recommended: false,
			phase: 5
		},
		{
			name: "Blessed Qiraji Musket",
			icon: '../assets/build/images/rifle11.jpg',
			type: 'Gun',
			quality: 'epic',
			dmgMin: 86,
			dmgMax: 160,
			speed: 2.6,
			recommended: false,
			phase: 5
		}
	]

	getWeapons() {
		return this.weapons;
	}
}