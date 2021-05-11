import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-by-pincode',
  templateUrl: './search-by-pincode.component.html',
  styleUrls: ['./search-by-pincode.component.css']
})
export class SearchByPincode implements OnInit {
  pincode: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { }

  convertInput() {
    if (this.pincode != null && this.pincode != undefined) {
      this.pincode = Math.abs(this.pincode);
    }
  }

  search() {
    if (this.pincode != null && this.pincode != undefined) {
      this.router.navigate(['app-available-slots', { 'pincode': this.pincode }]);
    }
    else {
      console.log('Pincode is not specified');
    }
  }
}
