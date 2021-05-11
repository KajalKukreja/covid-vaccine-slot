import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { District } from 'src/app/data/district';
import { State } from 'src/app/data/state';
import { DistrictsService } from 'src/app/services/districts.service';
import { StatesService } from 'src/app/services/states.service';

@Component({
	selector: 'app-search-by-district',
	templateUrl: './search-by-district.component.html',
	styleUrls: ['./search-by-district.component.css'],
	providers: [StatesService, DistrictsService]
})
export class SearchByDistrict implements OnInit {
	states: State[];

	selectedState: State;

	districts: District[];

	selectedDistrict: District;

	constructor(private router: Router, private route: ActivatedRoute, private statesService: StatesService, private districtsService: DistrictsService) {
		this.states = [];
		this.districts = [];
	}

	ngOnInit() {
		this.showStates();
	}

	showStates() {
		this.statesService.getStates().subscribe((rowData: any) => {
			if (rowData.states != null) {
				for (let row of rowData.states) {
					this.states.push(new State(row.state_id, row.state_name));
				}
			}
			else {
				console.log('No states');
			}
		});
	}

	showDistricts() {
		if (this.selectedState != null && this.selectedState != undefined) {
			this.districts = [];
			this.districtsService.getDistricts(this.selectedState.id).subscribe((rowData: any) => {
				if (rowData.districts != null) {
					for (let row of rowData.districts) {
						this.districts.push(new District(row.district_id, row.district_name));
					}
				}
				else {
					console.log('No districts');
				}
			});
		}
	}

	search() {
		if (this.selectedDistrict.id != null && this.selectedDistrict.id != undefined) {
			this.router.navigate(['app-available-slots', { 'district_id': this.selectedDistrict.id }]);
		}
		else {
			console.log('District is not specified');
		}
	}
}
