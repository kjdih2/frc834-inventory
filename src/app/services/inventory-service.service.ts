import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class InventoryServiceService {
    constructor() {}

	getAllSearchableParts() {
		
		const inventoryParts = [
			{
				partName: 'Screws',
				sku: '11111111',
				category: 'Metal',
				description: 'screws',
				quantity: {
					totalQuantity: 0,
					availableQuantity: 0,
				},
				locations: [
					{
						binCode: 'a',
						binDescription: 'a',
						binQuantity: 0,
					},
					{
						binCode: 'a',
						binDescription: 'a',
						binQuantity: 0,
					},
				],
				movementHistory: [
					{
						movementDate: 'a',
						fromBin: 'a',
						toBin: 'a',
						quantityMoved: 0,
						remarks: 'a',
					}
				]
			},
			{
				partName: 'Nails',
				sku: '11111111',
				category: 'Metal',
				description: 'screws',
				quantity: {
					totalQuantity: 0,
					availableQuantity: 0,
				},
				locations: [
					{
						binCode: 'a',
						binDescription: 'a',
						binQuantity: 0,
					},
					{
						binCode: 'a',
						binDescription: 'a',
						binQuantity: 0,
					},
				],
				movementHistory: [
					{
						movementDate: 'a',
						fromBin: 'a',
						toBin: 'a',
						quantityMoved: 0,
						remarks: 'a',
					}
				]
			},
			{
				partName: 'Screwdrivers',
				sku: '11111111',
				category: 'Metal',
				description: 'screws',
				quantity: {
					totalQuantity: 0,
					availableQuantity: 0,
				},
				locations: [
					{
						binCode: 'a',
						binDescription: 'adsfadfsaasdfsdaffsda',
						binQuantity: 0,
					},
					{
						binCode: 'a',
						binDescription: 'asfdasfdsdfafsdaf',
						binQuantity: 0,
					},
					{
						binCode: 'a',
						binDescription: 'asfdasfdsdfafsdaf',
						binQuantity: 0,
					},
					{
						binCode: 'a',
						binDescription: 'asfdasfdsdfafsdaf',
						binQuantity: 0,
					},
				],
				movementHistory: [
					{
						movementDate: 'a',
						fromBin: 'a',
						toBin: 'a',
						quantityMoved: 0,
						remarks: 'a',
					}
				]
			},
			{
				partName: 'Pencils',
				sku: '11111111',
				category: 'Metal',
				description: 'screws',
				quantity: {
					totalQuantity: 0,
					availableQuantity: 0,
				},
				locations: [
					{
						binCode: 'a',
						binDescription: 'a',
						binQuantity: 0,
					},
					{
						binCode: 'a',
						binDescription: 'a',
						binQuantity: 0,
					},
				],
				movementHistory: [
					{
						movementDate: 'a',
						fromBin: 'a',
						toBin: 'a',
						quantityMoved: 0,
						remarks: 'a',
					}
				]
			},
			{
				partName: 'Root Beer',
				sku: '11111111',
				category: 'Metal',
				description: 'screws',
				quantity: {
					totalQuantity: 0,
					availableQuantity: 0,
				},
				locations: [
					{
						binCode: 'a',
						binDescription: 'a',
						binQuantity: 0,
					},
					{
						binCode: 'a',
						binDescription: 'a',
						binQuantity: 0,
					},
				],
				movementHistory: [
					{
						movementDate: 'a',
						fromBin: 'a',
						toBin: 'a',
						quantityMoved: 0,
						remarks: 'a',
					}
				]
			},
			{
				partName: 'Autons',
				sku: '11111111',
				category: 'Software',
				description: 'ryan deleted the autons',
				quantity: {
					totalQuantity: 0,
					availableQuantity: 0,
				},
				locations: [
					{
						binCode: 'a',
						binDescription: 'a',
						binQuantity: 0,
					},
					{
						binCode: 'a',
						binDescription: 'a',
						binQuantity: 0,
					},
				],
				movementHistory: [
					{
						movementDate: 'a',
						fromBin: 'a',
						toBin: 'a',
						quantityMoved: 0,
						remarks: 'a',
					}
				]
			},
		]

		return new Observable((observer: Observer<any>) => {
			observer.next(inventoryParts);
			observer.complete();
		});

	}
}


/*
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
*/