export class VaccineDetails {
	vaccine: string;
	date: string;
	available_capacity: number;
	available_capacity_dose1: number;
	available_capacity_dose2: number;
	allow_all_age: boolean;
	min_age_limit: string;
	max_age_limit: string;
	slots: string;

	constructor(vaccine: string, date: string, available_capacity: number, available_capacity_dose1: number,
		available_capacity_dose2: number, allow_all_age: boolean, min_age_limit: string, 
		max_age_limit: string, slots: string) {
		this.vaccine = vaccine;
		this.date = date;
		this.available_capacity = available_capacity;
		this.available_capacity_dose1 = available_capacity_dose1;
		this.available_capacity_dose2 = available_capacity_dose2;
		this.allow_all_age = allow_all_age;
		this.min_age_limit = min_age_limit;
		this.max_age_limit = max_age_limit;
		this.slots = slots;
	}
}
