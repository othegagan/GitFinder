import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'user-search',
    templateUrl: './user-search.component.html'
})
export class UserSearchComponent implements OnInit {
    // To allow data (username) to flow from the child class(user-search) to the parent class(main app)
    @Output() onUserSearch: EventEmitter<any> = new EventEmitter();

    constructor(private fb: FormBuilder) { }

    userSeacrhForm: FormGroup = this.fb.group({
        username: '',
    });

    ngOnInit(): void { }

    onUserSubmit() {
        this.onUserSearch.emit(this.userSeacrhForm.value.username);
        this.userSeacrhForm.reset();
    }
}
