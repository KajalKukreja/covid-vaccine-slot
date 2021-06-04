import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-search-by-pincode',
  templateUrl: './search-by-pincode.component.html',
  styleUrls: ['./search-by-pincode.component.css'],
})
export class SearchByPincode implements OnInit {
  pincode: number;

  pincodeError: boolean;

  age: number;

  dose: string;

  constructor(private router: Router, private utilService: UtilService) { }

  ngOnInit() { }

  validatePincode() {
    const validPincode = this.utilService.validPincode(this.pincode);
		if (validPincode) {
      this.pincodeError = false;
      this.utilService.resetInput(0);
    }
    else {
      this.pincodeError = true;
      this.utilService.highlightInput(0);
    }
  }

  search() {
    if (this.utilService.validPincode(this.pincode)) {
      this.pincodeError = false;
      this.utilService.resetInput(0);
      let availableSlotsRoute = 'app-available-slots;pincode=' + this.pincode;

      if (this.age != null && this.age != undefined) {
        availableSlotsRoute += ';age=' + this.age;
      }
      if (this.dose != null && this.dose != undefined) {
        availableSlotsRoute += ';dose=' + this.dose;
      }

      this.router.navigateByUrl(availableSlotsRoute);
    }
    else {
      this.pincodeError = true;
      this.utilService.highlightInput(0);
    }
  }

  clearAll() {
    this.pincode = null;
    this.pincodeError = null;
    this.utilService.resetInput(0);
  }
}
