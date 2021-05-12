import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-search-slots',
  templateUrl: './search-slots.component.html',
  styleUrls: ['./search-slots.component.css'],
  providers: [MemberService],
})
export class SearchSlotsComponent implements OnInit {

  displayEmail: boolean = false;
  displayWhatsApp: boolean = false;

  email: string;

  mobileNo: number;

  emailAdded: string;

  mobileNoAdded: string;

  constructor(private memberService: MemberService) { }

  ngOnInit() { }

  showEmailDialog() {
    this.email = null;
    this.mobileNo = null;
    this.emailAdded = null;
    this.mobileNoAdded = null;
    this.displayEmail = true;
  }

  showWhatsAppDialog() {
    this.email = null;
    this.mobileNo = null;
    this.emailAdded = null;
    this.mobileNoAdded = null;
    this.displayWhatsApp = true;
  }

  notifyMe() {
    if (this.email != null && this.email != undefined && this.email.length > 0) {
      console.log(this.email);
      this.memberService.addEmailAddress(this.email).subscribe((result: any) => {
        if (result) {
          this.emailAdded = 'true';
        }
        else {
          this.emailAdded = 'false';
        }
      });
    }
    else if (this.mobileNo != null && this.mobileNo != undefined && this.mobileNo != 0) {
      console.log(this.mobileNo);
      this.memberService.addMobileNumber(this.mobileNo).subscribe((result: any) => {
        if (result) {
          this.mobileNoAdded = 'true';
        }
        else {
          this.mobileNoAdded = 'false';
        }
      });
    }
  }
}
