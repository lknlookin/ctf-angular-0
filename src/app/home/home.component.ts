import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    @Input()
    title: string;

    count: number = 0;

    items = [1,2,3,4,5];

    constructor() {}

    countNumber() {
        this.count += 1;
    }
}