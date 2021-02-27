import { Component } from '@angular/core';

@Component ({
    selector: 'app-count',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})

export class CountingComponent{
    count2: number = 0;

    constructor(){}

    countNumber2(){
        this.count2 += 1;
    }
}