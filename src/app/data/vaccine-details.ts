export class VaccineDetails {
	vaccine: string;
	date: string;
	available_capacity: number;
	min_age_limit: string;
	slots: string;

	constructor(vaccine: string, date: string, available_capacity: number, min_age_limit: string, slots: string) {
		this.vaccine = vaccine;
		this.date = date;
		this.available_capacity = available_capacity;
		this.min_age_limit = min_age_limit;
		this.slots = slots;
	}
}
