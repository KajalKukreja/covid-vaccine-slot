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

  constructor(private router: Router, private renderer: Renderer2, private utilService: UtilService) { }

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
      this.router.navigate(['app-available-slots', { 'pincode': this.pincode }]);
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
