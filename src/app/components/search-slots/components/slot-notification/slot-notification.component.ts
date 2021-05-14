import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { District } from 'src/app/data/district';
import { State } from 'src/app/data/state';
import { DistrictsService } from 'src/app/services/districts.service';
import { MemberService } from 'src/app/services/member.service';
import { StatesService } from 'src/app/services/states.service';

@Component({
	selector: 'app-slot-notification',
	templateUrl: './slot-notification.component.html',
	styleUrls: ['./slot-notification.component.css'],
	providers: [StatesService, DistrictsService, MemberService]
})
export class SlotNotification implements OnInit {
	
	pincode: number;

	states: State[];

	selectedState: State;

	districts: District[];

	selectedDistrict: District;
	
	displayEmail: boolean = false;

	displayWhatsApp: boolean = false;
  
	email: string;
  
	mobileNo: number;
  
	emailAdded: string;
  
	mobileNoAdded: string;

	constructor(private router: Router, private route: ActivatedRoute, private statesService: StatesService, private districtsService: DistrictsService, private memberService: MemberService) {
		this.states = [];
		this.districts = [];
	}

	ngOnInit() {
		this.showStates();
	}

	convertInput() {
		if (this.pincode != null && this.pincode != undefined) {
		  this.pincode = Math.abs(this.pincode);
		}
	  }

	showStates() {
		this.statesService.getStates().subscribe((rowData: any) => {
			if (rowData != null && rowData.states != null) {
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
				if (rowData != null && rowData.districts != null) {
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
	
	showEmailDialog() {
		this.pincode = null;
		this.selectedState = null;
		this.selectedDistrict = null;
		this.email = null;
		this.mobileNo = null;
		this.emailAdded = null;
		this.mobileNoAdded = null;
		this.displayEmail = true;
	  }
	
	  showWhatsAppDialog() {
		this.pincode = null;
		this.selectedState = null;
		this.selectedDistrict = null;
		this.email = null;
		this.mobileNo = null;
		this.emailAdded = null;
		this.mobileNoAdded = null;
		this.displayWhatsApp = true;
	  }
	
	  notifyMe() {
		if (this.displayEmail && this.validEmail()) {
		  this.memberService.addMember(this.email, null, this.pincode, 
			this.selectedDistrict != null ? this.selectedDistrict.id : null).subscribe((result: any) => {
			result ? this.emailAdded = 'true': this.emailAdded = 'false';
		  });
		}
		else if (this.displayWhatsApp && this.validMobileNo()) {
			this.memberService.addMember(null, this.mobileNo, this.pincode, 
				this.selectedDistrict != null ? this.selectedDistrict.id : null).subscribe((result: any) => {
				result ? this.mobileNoAdded = 'true': this.mobileNoAdded = 'false';
			  });
		}
	  }
	
	  validEmail(): boolean {
		return (this.email != null && this.email != undefined && this.email.length > 0);
	  }
	
	  validMobileNo(): boolean {
		return (this.mobileNo != null && this.mobileNo != undefined && this.mobileNo != 0);
	  }
	
}
