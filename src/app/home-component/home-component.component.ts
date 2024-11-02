import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { InventoryServiceService } from '../services/inventory-service.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-home-component',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './home-component.component.html',
    styleUrl: './home-component.component.scss',
})
export class HomeComponentComponent implements OnInit {
    searchText: string = '';
    allParts: any = [];
    searchedParts: any = [];
    destroyed = new Subject<void>();
    screenSize = 'lg';

    constructor(
        private inventoryService: InventoryServiceService,
        private breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit(): void {
        this.manageScreenSize();

        this.inventoryService
            .getAllSearchableParts()
            .subscribe((data: any) => {
                this.allParts = JSON.parse(JSON.stringify(data));
                this.searchedParts = JSON.parse(JSON.stringify(data));
            })
            .add(() => {
                console.log(this.allParts);
            });
    }

    manageScreenSize() {
        this.breakpointObserver
            .observe([
                Breakpoints.XLarge,
                Breakpoints.Large,
                Breakpoints.Medium,
                Breakpoints.Small,
                '(max-width: 550px)',
                Breakpoints.XSmall,
            ])
            .subscribe((breakpointState: BreakpointState) => {
                if (breakpointState.breakpoints['(max-width: 550px)']) {
                    this.screenSize = 'xs';
                } else if (breakpointState.breakpoints[Breakpoints.XLarge]) {
                    this.screenSize = 'md';
                } else if (breakpointState.breakpoints[Breakpoints.Large]) {
                    this.screenSize = 'md';
                } else if (breakpointState.breakpoints[Breakpoints.Medium]) {
                    this.screenSize = 'md';
                } else if (breakpointState.breakpoints[Breakpoints.Small]) {
                    this.screenSize = 'sm';
                } else if (breakpointState.breakpoints[Breakpoints.XSmall]) {
                    this.screenSize = 'xs';
                }
            });
    }

    filterItems(event: any) {
        console.log(event.target.value);
		this.searchedParts = this.allParts.filter((part: any) => {
			let isPartValid = false;
			if (part.partName.toLowerCase().includes(event.target.value.toLowerCase())) {
				isPartValid = true;
			}
			if (part.sku.toLowerCase().includes(event.target.value.toLowerCase())) {
				isPartValid = true;
			}
			if (part.category.toLowerCase().includes(event.target.value.toLowerCase())) {
				isPartValid = true;
			}
			if (part.description.toLowerCase().includes(event.target.value.toLowerCase())) {
				isPartValid = true;
			}
			if (part.locations.some((location: any) => location.binCode.toLowerCase().includes(event.target.value.toLowerCase()))) {
				isPartValid = true;
			}
			return isPartValid;
		});
    }
}
