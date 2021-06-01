import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VaccineDetails } from 'src/app/data/vaccine-details';
import { VaccineSlot } from 'src/app/data/vaccine-slot';
import { VaccineSlotsService } from 'src/app/services/vaccine-slots.service';

@Component({
	selector: 'app-available-slots',
	templateUrl: './available-slots.component.html',
	styleUrls: ['./available-slots.component.css'],
})
export class AvailableSlotsComponent implements OnInit {

	pincode: number;

	districtId: number;

	cols: any[];

	slots: VaccineSlot[];

	noResults: boolean;

	constructor(private route: ActivatedRoute, private vaccineSlotsService: VaccineSlotsService) { }

	ngOnInit() {
		this.route.params.subscribe(val => {
			this.pincode = val.pincode != null ? +val.pincode : null;
			this.districtId = val.district_id != null ? +val.district_id : null;

			this.cols = [
				{ field: 'center', header: 'Center' },
				{ field: 'available_slots', header: 'Available Slots' },
			];

			this.slots = [];
			this.search();
		});
	}

	search() {
		let result: Observable<any>;

		if (this.pincode != null && this.pincode != undefined && this.pincode != 0) {
			result = this.vaccineSlotsService.getSlotsByPincode(this.pincode);
		}
		else if (this.districtId != null && this.districtId != undefined && this.districtId != 0) {
			result = this.vaccineSlotsService.getSlotsByDistrict(this.districtId);
		}
		if (result != null && result != undefined) {
			result.subscribe((rowData: any) => {
				if (rowData.centers != null && rowData.centers.length > 0) {
					for (let row of rowData.centers) {
						const address = row.address + ', ' + (row.block_name != 'Not Applicable' ? row.block_name + ', ' : '') + row.district_name + ', ' + row.state_name +
							', ' + row.pincode;

						let vaccines: VaccineDetails[] = [];
						for (let session of row.sessions) {
							if (session.available_capacity > 0) {
								const slots = session.slots != null ? session.slots.toString().replaceAll(',', ', ') : '';
								vaccines.push(new VaccineDetails(session.vaccine, session.date, session.available_capacity, session.available_capacity_dose1, session.available_capacity_dose2, session.min_age_limit, slots));
							}
						}
						const vaccineSlot = new VaccineSlot(row.name, address,
							row.fee_type, row.vaccine_fees, vaccines);

						if (vaccineSlot.vaccines.length > 0) {
							this.slots.push(vaccineSlot);
						}
					}
					if (this.slots.length == 0) {
						console.log('No results');
						this.noResults = true;
					}
				}
				else {
					console.log('No results');
					this.noResults = true;
				}
			});
		}
	}
}
