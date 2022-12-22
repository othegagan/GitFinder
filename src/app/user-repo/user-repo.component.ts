import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'user-repo',
    templateUrl: './user-repo.component.html',
})
export class UserRepoComponent implements OnInit {
    @Input() repo!: any;

    constructor() { }

    ngOnInit(): void { }
}
