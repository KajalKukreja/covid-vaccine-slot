import { Component, OnInit, ViewChild } from '@angular/core';
import { RecaptchaComponent } from 'ng-recaptcha';
import { District } from 'src/app/data/district';
import { State } from 'src/app/data/state';
import { MemberService } from 'src/app/services/member.service';
import { ReCaptchaService } from 'src/app/services/recaptcha.service';
import { UtilService } from 'src/app/services/util.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-slot-notification',
	templateUrl: './slot-notification.component.html',
	styleUrls: ['./slot-notification.component.css'],
})
export class SlotNotification implements OnInit {

	@ViewChild('reCaptchaEmail') reCaptchaEmail: RecaptchaComponent;

	@ViewChild('reCaptchaMobile') reCaptchaMobile: RecaptchaComponent;

	reCaptchaSiteKey: string;

	pincode: number;

	states: State[];

	selectedState: State;

	districts: District[];

	selectedDistrict: District;

	age: number;

	dose: string;

	displayEmail: boolean;

	displayWhatsApp: boolean;

	email: string;

	mobileNo: number;

	emailAdded: string;

	mobileNoAdded: string;

	captchaResponse: string;

	commonErrors: string[];

	constructor(private reCaptchaService: ReCaptchaService,
		private utilService: UtilService, private memberService: MemberService) {
		this.reCaptchaSiteKey = environment.reCaptchaSiteKey;
		this.states = [];
		this.districts = [];
		this.commonErrors = [];
	}

	ngOnInit() {
		this.states = this.utilService.getStates();
	}

	validatePincodeAndDistrict() {
		const validPincode = this.utilService.validPincode(this.pincode);
		const validState = this.utilService.validState(this.selectedState);
		const validDistrict = this.utilService.validDistrict(this.selectedDistrict);

		if (validPincode || (validState && validDistrict)) {
			this.utilService.resetNotificationInput(0);
			this.utilService.resetNotificationDropdown(0);
			this.utilService.resetNotificationDropdown(1);
			this.commonErrors = this.commonErrors.filter(item => item != 'Enter a valid pincode or select a district.');
		}
		else {
			this.utilService.highlightNotificationInput(0);
			this.utilService.highlightNotificationDropdown(0);
			this.utilService.highlightNotificationDropdown(1);
			this.commonErrors.push('Enter a valid pincode or select a district.');
		}
	}

	validateEmail() {
		const validEmail = this.utilService.validEmail(this.email);
		if (validEmail) {
			this.utilService.resetNotificationEmail();
			this.commonErrors = this.commonErrors.filter(item => item != 'Enter a valid email address.');
		}
		else {
			this.utilService.highlightNotificationEmail();
			this.commonErrors.push('Enter a valid email address.');
		}
	}

	validateMobileNo() {
		const validMobileNo = this.utilService.validMobileNo(this.mobileNo);
		if (validMobileNo) {
			this.utilService.resetNotificationInput(1);
			this.commonErrors = this.commonErrors.filter(item => item != 'Enter a valid mobile no.');
		}
		else {
			this.utilService.highlightNotificationInput(1);
			this.commonErrors.push('Enter a valid mobile no.');
		}
	}

	showDistricts() {
		if (this.utilService.validState(this.selectedState)) {
			this.utilService.resetNotificationDropdown(0);
			this.utilService.resetNotificationDropdown(1);
			this.selectedDistrict = null;
			this.districts = this.utilService.getDistricts(this.selectedState.id);
		}
	}

	showEmailDialog() {
		this.clearAllFields();
		this.displayEmail = true;
	}

	showWhatsAppDialog() {
		this.clearAllFields();
		this.displayWhatsApp = true;
	}

	resolved(captchaResponse: string) {
		this.captchaResponse = captchaResponse;
		this.utilService.resetNotificationReCaptcha(0);
		this.commonErrors = this.commonErrors.filter(item =>
			item != 'Could not load reCaptcha. Please refresh the page.' &&
			item != 'ReCaptcha checkbox is required.' &&
			item != 'ReCaptcha verification failed. Please try again.');
	}

	errored(errorDetails: any) {
		console.log(errorDetails);
		const captchaError = 'Could not load reCaptcha. Please refresh the page.';
		console.log(captchaError);
		this.commonErrors.push(captchaError);
		this.reCaptchaEmail.reset();
		this.reCaptchaMobile.reset();
	}

	notifyMe() {
		this.commonErrors = [];
		this.resetAllInputStyles();

		const validPincode = this.utilService.validPincode(this.pincode);
		const validState = this.utilService.validState(this.selectedState);
		const validDistrict = this.utilService.validDistrict(this.selectedDistrict);
		const validEmail = this.utilService.validEmail(this.email);
		const validMobileNo = this.utilService.validMobileNo(this.mobileNo);
		const validCaptcha = this.utilService.validCaptcha(this.captchaResponse);

		if (!validPincode && (!validState || !validDistrict)) {
			this.commonErrors.push('Enter a valid pincode or select a district.');
			this.utilService.highlightNotificationInput(0);
			if (!validState) {
				this.utilService.highlightNotificationDropdown(0);
			}
			if (!validDistrict) {
				this.utilService.highlightNotificationDropdown(1);
			}
		}

		if (!validEmail && !validMobileNo) {
			if (this.displayEmail) {
				this.commonErrors.push('Enter a valid email address.');
				this.utilService.highlightNotificationEmail();
			}
			else if (this.displayWhatsApp) {
				this.commonErrors.push('Enter a valid mobile no.');
				this.utilService.highlightNotificationInput(1);
			}
		}

		if (!validCaptcha) {
			this.commonErrors.push('ReCaptcha checkbox is required.');
			this.utilService.highlightNotificationReCaptcha(0);
		}

		if ((validPincode || validDistrict) && (validEmail || validMobileNo) && validCaptcha) {
			const failureMessage = 'There\'s some error. Please try again.';
			this.reCaptchaService.verifyReCaptcha(this.captchaResponse).subscribe(
				data => {
					if (data.success) {
						if (this.displayEmail) {
							this.memberService.addMember(this.email, null, this.pincode,
								this.selectedDistrict != null ? this.selectedDistrict.id : null,
								this.age, this.dose).subscribe((result: any) => {
									result ? this.emailAdded = 'true' : this.emailAdded = failureMessage;
								});
						}
						else if (this.displayWhatsApp) {
							this.memberService.addMember(null, this.mobileNo, this.pincode,
								this.selectedDistrict != null ? this.selectedDistrict.id : null,
								this.age, this.dose).subscribe((result: any) => {
									result ? this.mobileNoAdded = 'true' : this.mobileNoAdded = failureMessage;
								});
						}
						this.commonErrors = null;
					}
					else {
						this.captchaVerificationFailed(data);
					}
				},
				err => {
					this.captchaVerificationFailed(err);
				},
				() => { }
			);
		}
	}

	clearAllFields() {
		this.pincode = null;
		this.selectedState = null;
		this.districts = [];
		this.selectedDistrict = null;
		this.displayEmail = false;
		this.displayWhatsApp = false;
		this.email = null;
		this.mobileNo = null;
		this.emailAdded = null;
		this.mobileNoAdded = null;
		this.captchaResponse = null;
		this.commonErrors = [];
	}

	resetAllInputStyles() {
		this.utilService.resetNotificationInput(0);
		this.utilService.resetNotificationDropdown(0);
		this.utilService.resetNotificationDropdown(1);
		this.utilService.resetNotificationEmail();
		this.utilService.resetNotificationInput(1);
		this.utilService.resetNotificationReCaptcha(0);
	}

	captchaVerificationFailed(err: any) {
		console.log(err);
		this.captchaResponse = null;
		const captchaError = 'ReCaptcha verification failed. Please try again.';
		this.commonErrors.push(captchaError);
		if (this.displayEmail) {
			this.reCaptchaEmail.reset();
		}
		else if (this.displayWhatsApp) {
			this.reCaptchaMobile.reset();
		}
	}
}
