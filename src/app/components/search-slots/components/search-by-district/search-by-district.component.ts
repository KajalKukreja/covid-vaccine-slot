import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { District } from 'src/app/data/district';
import { State } from 'src/app/data/state';
import { UtilService } from 'src/app/services/util.service';

@Component({
	selector: 'app-search-by-district',
	templateUrl: './search-by-district.component.html',
	styleUrls: ['./search-by-district.component.css'],
})
export class SearchByDistrict implements OnInit {
	states: State[];

	selectedState: State;

	districts: District[];

	selectedDistrict: District;

	stateError: boolean;

	districtError: boolean;

	age: number;

	dose: string;

	constructor(private router: Router, private utilService: UtilService) {
		this.states = [];
		this.districts = [];
	}

	ngOnInit() {
		this.states = this.utilService.getStates();
	}

	showDistricts() {
		if (this.utilService.validState(this.selectedState)) {
			this.stateError = false;
			this.districtError = false;
			this.utilService.resetDropdown(0);
			this.utilService.resetDropdown(1);
			this.selectedDistrict = null;
			this.districts = this.utilService.getDistricts(this.selectedState.id);
		}
	}

	search() {
		if (!this.utilService.validState(this.selectedState)) {
			this.stateError = true;
			this.utilService.highlightDropdown(0);
		}
		else if (!this.utilService.validDistrict(this.selectedDistrict)) {
			this.districtError = true;
			this.utilService.highlightDropdown(1);
		}
		else {
			if (this.selectedDistrict.id != null && this.selectedDistrict.id != undefined) {
				this.stateError = false;
				this.districtError = false;
				this.utilService.resetDropdown(0);
				this.utilService.resetDropdown(1);
				let availableSlotsRoute = 'app-available-slots;district_id=' + this.selectedDistrict.id;

				if (this.age != null && this.age != undefined) {
					availableSlotsRoute += ';age=' + this.age;
				}
				if (this.dose != null && this.dose != undefined) {
					availableSlotsRoute += ';dose=' + this.dose;
				}

				this.router.navigateByUrl(availableSlotsRoute);
			}
			else {
				console.log('District is not specified');
				this.districtError = true;
				this.utilService.highlightDropdown(1);
			}
		}
	}

	clearAll() {
		this.districts = null;
		this.selectedState = null;
		this.selectedDistrict = null;
		this.stateError = null;
		this.districtError = null;
		this.utilService.resetDropdown(0);
		this.utilService.resetDropdown(1);
	}
}
