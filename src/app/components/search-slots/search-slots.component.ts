import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchByDistrict } from './components/search-by-district/search-by-district.component';
import { SearchByPincode } from './components/search-by-pincode/search-by-pincode.component';

@Component({
  selector: 'app-search-slots',
  templateUrl: './search-slots.component.html',
  styleUrls: ['./search-slots.component.css'],
})
export class SearchSlotsComponent implements OnInit {
  @ViewChild('pincode') pincode: SearchByPincode;

  @ViewChild('district') district: SearchByDistrict;

  constructor(private router: Router, private route: ActivatedRoute) { }

	ngOnInit() { }

  clear(event: any) {
    if (event.index == 0) {
      this.district.clearAll();
    }
    else if (event.index == 1) {
      this.pincode.clearAll();
    }
  }
}
