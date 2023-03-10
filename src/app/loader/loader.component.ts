import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
    @Input() text!: string;

    constructor() { }

    ngOnInit(): void { }
}