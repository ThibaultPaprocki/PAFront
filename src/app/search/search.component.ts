import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LightProfil} from "../shared/model/profil.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  userSearchForm: FormGroup;
  users: LightProfil[];

  constructor() {
    this.userSearchForm = new FormGroup({
      userName: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  search() : void {
    console.log("search : "+this.userSearchForm.get('userName').value);
  }
}
