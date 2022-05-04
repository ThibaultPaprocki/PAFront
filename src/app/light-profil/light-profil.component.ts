import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../shared/service/user.service";
import {LightProfil} from "../shared/model/profil.model";
import {User} from "../shared/model/user.model";

@Component({
  selector: 'app-light-profil',
  templateUrl: './light-profil.component.html',
  styleUrls: ['./light-profil.component.css']
})
export class LightProfilComponent implements OnInit {

  user : User;

  constructor(private router: ActivatedRoute, private userService: UserService ) { }

  ngOnInit(): void {
    let userid : string = this.router.snapshot.paramMap.get("nameUser");
    //TODO
    //Appel API pour récupérer et afficher le profil d'un USER sans connexion
    this.userService.getProfil(userid).subscribe(
      ((data) => this.user = data),
      (error => console.log(error))
    );
  }

}
