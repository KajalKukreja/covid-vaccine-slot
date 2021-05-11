import { VaccineDetails } from './vaccine-details';

export class VaccineSlot {
	name: string;
	address: string;
	fee_type: string;
	vaccine_fees: string[];
	vaccines: VaccineDetails[];

	constructor(name: string, address: string, fee_type: string, vaccine_fees: string[], vaccines: VaccineDetails[]) {
		this.name = name;
		this.address = address;
		this.fee_type = fee_type;
		this.vaccine_fees = vaccine_fees;
		this.vaccines = vaccines;
	}
}
