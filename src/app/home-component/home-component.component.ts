import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { InventoryServiceService } from '../services/inventory-service.service';


@Component({
    selector: 'app-home-component',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './home-component.component.html',
    styleUrl: './home-component.component.scss',
})
export class HomeComponentComponent implements OnInit {

	searchText: string = '';
	allParts: any = [];
	searchedParts: any = [];

    constructor(private inventoryService: InventoryServiceService) {}

    ngOnInit(): void {
		this.inventoryService.getAllSearchableParts().subscribe((data: any) => {
			this.allParts = JSON.parse(JSON.stringify(data));
			this.searchedParts = JSON.parse(JSON.stringify(data));
		});
	}

	filterItems(event: any) {
		console.log(event.target.value);
	}
}
