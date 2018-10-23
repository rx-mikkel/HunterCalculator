import { Component, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'calculated-table',
  templateUrl: './calculated-damage.component.html'
})
export class CalculatedDamageComponent implements OnChanges {
	@Input()
	selectedWeapon: any;

	@Input()
	slaying: number;
	@Input()
	rws: number;
	@Input()
	barrage: number;
	@Input()
	mortal: number;
	@Input()
	gs: number;

	@Input()
	baseAP: number;
	@Input()
	criticalStrikeChance: number;
	@Input()
	rangedScope: number;
	@Input()
	ammo: number;

	showCycleDetails: boolean = false;
	showShotDetails: boolean = false;

	aimedShotBonus: number = 600;
	multiShotBonus: number = 150;

	autoShotAvg: number = 0;
	autoShotAvgCrit: number = 0;
	autoShotFinal: number = 0;

	aimedShotAvg: number = 0;
	aimedShotAvgCrit: number = 0;
	aimedShotFinal: number = 0;

	multiShotAvg: number = 0;
	multiShotAvgCrit: number = 0;
	multiShotFinal: number = 0;

	adjustedSpeed: number = 0;

	clippedAutos: number = 0;
	clippedAutoshotDamage: number = 0;
	clippedMultiShotDamage: number = 0;
	clippedTotal: number = 0;
	clippedDPS: number = 0;

	fullAutoshotDamage: number = 0;
	fullMultiShotDamage: number = 0;
	multiShotCoefficient: number = 0;
	fullCycleTime: number = 0;
	fullTotal: number = 0;
	fullDPS: number = 0;

	shotVars = {
		slaying: 1,
		rws: 1,
		mortal: 2,
		barrage: 1,
		gs: 1,
		avgWeapon: 0,
		ap: 0
	};

	constructor (
		) {
    }

	ngOnChanges() {
		this.baseAP = +this.baseAP;
		this.criticalStrikeChance = +this.criticalStrikeChance;
		this.rangedScope = +this.rangedScope;
		this.ammo = +this.ammo;
		this.calculateShots();
	}

	calculateShots() {
		this.shotVars.avgWeapon = (this.selectedWeapon.dmgMax + this.selectedWeapon.dmgMin) / 2;
		this.shotVars.ap = +this.baseAP;
		
		this.shotVars.slaying = 1 + (this.slaying / 100);
		
		this.shotVars.rws = 1 + (this.rws / 100);

		this.shotVars.mortal = 2 + (this.mortal*6 / 100);

		this.shotVars.barrage = 1 + (this.barrage*5 / 100);

		if(this.gs == 1) {
			this.shotVars.gs = 1.15;
		}
		else {
			this.shotVars.gs = 1;
		}
		
		this.calculateAutoShot();
		this.calculateAimedShot();
		this.calculateMultiShot();
		this.calculateShotCycles();
	}

	calculateAutoShot() {
		var adjustedCriticalPercentage = (this.criticalStrikeChance - 0.6)/100;
		var damage = (this.shotVars.ap/14)*this.selectedWeapon.speed;
		var rawDamage = damage+(+this.rangedScope)+this.shotVars.avgWeapon
		var ammoDamage = this.ammo * this.selectedWeapon.speed;
		this.autoShotAvg = this.shotVars.slaying*(ammoDamage + this.shotVars.rws * rawDamage);
		this.autoShotAvgCrit = this.autoShotAvg*this.shotVars.mortal*this.shotVars.slaying;
		this.autoShotFinal = this.autoShotAvg*(1-adjustedCriticalPercentage) + this.autoShotAvgCrit*adjustedCriticalPercentage;
	}

	calculateAimedShot() {
		var adjustedCriticalPercentage = (this.criticalStrikeChance - 0.6)/100;
		this.aimedShotAvg = this.shotVars.slaying*(this.ammo*this.selectedWeapon.speed+this.shotVars.rws*((this.shotVars.ap/14*2.8)+(+this.rangedScope)+this.shotVars.avgWeapon+this.aimedShotBonus))
		this.aimedShotAvgCrit = this.aimedShotAvg*this.shotVars.mortal*this.shotVars.slaying;
		this.aimedShotFinal = this.aimedShotAvg*(1-adjustedCriticalPercentage) + this.aimedShotAvgCrit*adjustedCriticalPercentage;
	}

	calculateMultiShot() {
		var adjustedCriticalPercentage = (this.criticalStrikeChance - 0.6)/100;
		this.multiShotAvg = this.shotVars.barrage*this.shotVars.gs*this.shotVars.slaying*(this.ammo*this.selectedWeapon.speed+this.shotVars.rws*((this.shotVars.ap/14*2.8)+(+this.rangedScope)+this.shotVars.avgWeapon+this.multiShotBonus))
		this.multiShotAvgCrit = this.multiShotAvg*this.shotVars.mortal*this.shotVars.slaying;
		this.multiShotFinal = this.multiShotAvg*(1-adjustedCriticalPercentage) + this.multiShotAvgCrit*adjustedCriticalPercentage;
	}

	calculateShotCycles() {
		this.adjustedSpeed = this.selectedWeapon.speed / 1.15;
		this.clippedCycle();
		this.fullCycle();
	}

	clippedCycle() {
		var cycleTime = 5.5;
		var autoShots = 0;
		for(var i = 0; (i*this.adjustedSpeed) < cycleTime; i++) {
			this.clippedAutos = i + 1;
		}
		this.clippedAutoshotDamage = this.clippedAutos * this.autoShotFinal;
		this.clippedMultiShotDamage = this.multiShotFinal * (6/7);
		this.clippedTotal = this.clippedAutoshotDamage + this.clippedMultiShotDamage + this.aimedShotFinal;
		this.clippedDPS = this.clippedTotal / 9;
	}

	fullCycle() {
		this.fullAutoshotDamage = (this.clippedAutos + 1) * this.autoShotFinal;
		this.fullCycleTime = (this.clippedAutos * this.adjustedSpeed) + 3.5;
		if(this.fullCycleTime < 10) {
			this.multiShotCoefficient = (6 / (10 - this.fullCycleTime)) / (1 + 6 / (10 - this.fullCycleTime));
		}
		else {
			this.multiShotCoefficient = 1;
		}
		this.fullMultiShotDamage = this.multiShotFinal * this.multiShotCoefficient;
		this.fullTotal = this.fullAutoshotDamage + this.fullMultiShotDamage + this.aimedShotFinal;
		this.fullDPS = this.fullTotal / this.fullCycleTime;
	}

	toggleCycleDetails() {
		this.showCycleDetails = !this.showCycleDetails;
	}

	toggleShotDetails() {
		this.showShotDetails = !this.showShotDetails;
	}
}
