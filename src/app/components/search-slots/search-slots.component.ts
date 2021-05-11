import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-slots',
  templateUrl: './search-slots.component.html',
  styleUrls: ['./search-slots.component.css']
})
export class SearchSlotsComponent implements OnInit {

  displayEmail: boolean = false;
  displayWhatsApp: boolean = false;

  email: string;

  mobileNo: number;

  constructor() { }

  ngOnInit() { }

  createAlert() {
    console.log('alert created');
  }

  showEmailDialog() {
    this.displayEmail = true;
  }

  showWhatsAppDialog() {
    this.displayWhatsApp = true;
  }

  notifyMe() {
    if (this.email != null && this.email != undefined && this.email.length > 0) {
      console.log(this.email);
    }
    else if (this.mobileNo != null && this.mobileNo != undefined && this.mobileNo != 0) {
      console.log(this.mobileNo);
    }
  }
}
