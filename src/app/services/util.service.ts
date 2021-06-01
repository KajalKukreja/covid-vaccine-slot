import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { District } from '../data/district';
import { State } from '../data/state';
import { DistrictsService } from './districts.service';
import { StatesService } from './states.service';

@Injectable()
export class UtilService {
	private renderer: Renderer2;

	constructor(rendererFactory: RendererFactory2, private statesService: StatesService,
		private districtsService: DistrictsService) {
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	getStates(): State[] {
		let states: State[] = [];
		this.statesService.getStates().subscribe((rowData: any) => {
			if (rowData.states != null) {
				for (let row of rowData.states) {
					states.push(new State(row.state_id, row.state_name));
				}
			}
			else {
				console.log('No states');
			}
		});
		return states;
	}

	getDistricts(id: number): District[] {
		let districts: District[] = [];
		this.districtsService.getDistricts(id).subscribe((rowData: any) => {
			if (rowData.districts != null) {
				for (let row of rowData.districts) {
					districts.push(new District(row.district_id, row.district_name));
				}
			}
			else {
				console.log('No districts');
			}
		});
		return districts;
	}

	validPincode(pincode: number): boolean {
		return pincode != null && pincode != undefined && pincode > 0 &&
		pincode.toString().trim() != null && pincode.toString().trim().length == 6;
	}

	validState(selectedState: State): boolean {
		return selectedState != null && selectedState != undefined;
	}

	validDistrict(selectedDistrict: District): boolean {
		return selectedDistrict != null && selectedDistrict != undefined;
	}

	validEmail(email: string): boolean {
		return email != null && email != undefined && email.length > 0;
	}

	validMobileNo(mobileNo: number): boolean {
		return mobileNo != null && mobileNo != undefined && mobileNo > 0 &&
		mobileNo.toString().trim() != null && mobileNo.toString().trim().length == 10;
	}

	validCaptcha(captchaResponse: string): boolean {
		return captchaResponse != null && captchaResponse.trim() != null &&
			captchaResponse.trim().length > 0
	}

	highlightInput(n: number) {
		const input = document.getElementsByClassName('p-inputnumber-input')[n];
		if (input != null && input != undefined) {
			this.renderer.setStyle(input, 'border', '1px solid red');
		}
	}

	highlightNotificationInput(n: number) {
		const slotNotification = document.getElementsByClassName('slot-notification')[0];
		if (slotNotification != null && slotNotification != undefined) {
			const input = slotNotification.getElementsByClassName('p-inputnumber-input')[n];
			if (input != null && input != undefined) {
				this.renderer.setStyle(input, 'border', '1px solid red');
			}
		}
	}

	highlightDropdown(n: number) {
		const dropdown = document.getElementsByClassName('p-dropdown')[n];
		if (dropdown != null && dropdown != undefined) {
			this.renderer.setStyle(dropdown, 'border', '1px solid red');
		}
	}

	highlightNotificationDropdown(n: number) {
		const slotNotification = document.getElementsByClassName('slot-notification')[0];
		if (slotNotification != null && slotNotification != undefined) {
			const dropdown = slotNotification.getElementsByClassName('p-dropdown')[n];
			if (dropdown != null && dropdown != undefined) {
				this.renderer.setStyle(dropdown, 'border', '1px solid red');
			}
		}
	}

	highlightNotificationEmail() {
		const input = document.getElementById('email');
		if (input != null && input != undefined) {
			this.renderer.setStyle(input, 'border', '1px solid red');
		}
	}

	highlightNotificationReCaptcha(n: number) {
		const recaptcha = document.getElementsByTagName('re-captcha')[n];
		if (recaptcha != null && recaptcha != undefined) {
			const div = recaptcha.getElementsByTagName('div')[0];
			if (div != null && div != undefined) {
				this.renderer.setStyle(div, 'border', '1px solid red');
			}
		}
	}

	resetInput(n: number) {
		const input = document.getElementsByClassName('p-inputnumber-input')[n];
		if (input != null && input != undefined) {
			this.renderer.setStyle(input, 'border', '1px solid #ced4da');
		}
	}

	resetNotificationInput(n: number) {
		const slotNotification = document.getElementsByClassName('slot-notification')[0];
		if (slotNotification != null && slotNotification != undefined) {
			const input = slotNotification.getElementsByClassName('p-inputnumber-input')[n];
			if (input != null && input != undefined) {
				this.renderer.setStyle(input, 'border', '1px solid #ced4da');
			}
		}
	}

	resetDropdown(n: number) {
		const dropdown = document.getElementsByClassName('p-dropdown')[n];
		if (dropdown != null && dropdown != undefined) {
			this.renderer.setStyle(dropdown, 'border', '1px solid #ced4da');
		}
	}

	resetNotificationDropdown(n: number) {
		const slotNotification = document.getElementsByClassName('slot-notification')[0];
		if (slotNotification != null && slotNotification != undefined) {
			const dropdown = slotNotification.getElementsByClassName('p-dropdown')[n];
			if (dropdown != null && dropdown != undefined) {
				this.renderer.setStyle(dropdown, 'border', '1px solid #ced4da');
			}
		}
	}

	resetNotificationEmail() {
		const input = document.getElementById('email');
		if (input != null && input != undefined) {
			this.renderer.setStyle(input, 'border', '1px solid #ced4da');
		}
	}

	resetNotificationReCaptcha(n: number) {
		const recaptcha = document.getElementsByTagName('re-captcha')[n];
		if (recaptcha != null && recaptcha != undefined) {
			const div = recaptcha.getElementsByTagName('div')[0];
			if (div != null && div != undefined) {
				this.renderer.setStyle(div, 'border', 'none');
			}
		}
	}
}
