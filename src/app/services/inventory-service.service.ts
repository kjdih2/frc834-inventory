import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class InventoryServiceService {
    constructor() {}

	getAllSearchableParts(): Observable<any> {


		
		const inventoryParts = [
			{
				partName: '',
				sku: '',
				category: '',
				description: '',
				quantity: {
					totalQuantity: 0,
					availableQuantity: 0,
				},
				locations: [
					{
						binCode: '',
						binDescription: '',
						binQuantity: 0,
					},
					{
						binCode: '',
						binDescription: '',
						binQuantity: 0,
					},
				],
				movementHistory: [
					{
						movementDate: '',
						fromBin: '',
						toBin: '',
						quantityMoved: 0,
						remarks: '',
					}
				]
			},
		]




		// return data as an observable
		const observable = new Observable((observer: Observer<any>) => {
			observer.next(inventoryParts);
			observer.complete();
		});
		return observable;
	}
}
