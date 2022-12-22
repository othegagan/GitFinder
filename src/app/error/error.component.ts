import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'error',
    templateUrl: './error.component.html',
})
export class ErrorComponent implements OnInit {
    @Input() error!: string;

    constructor() { }

    ngOnInit(): void { }
}
