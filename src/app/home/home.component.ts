import { Component, Input, NgModule, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  editorOptions = {theme: 'vs-dark', language: 'java'};
  editorOptions2 = {theme: 'vs-dark', language: ''};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}'
  codeRecu : string = '';

  constructor(private route: Router) {}

  ngOnInit(): void {

  }


  changeLanguage(newLanguage:string):void {
    this.editorOptions.language = newLanguage;
  }

  displayCode():void {
    console.log("code : "+this.code);
  }

  sendCode():void{
    console.log("code a envoyer : "+this.code);
    console.log("langage à envoyer : "+this.editorOptions.language);
    this.codeRecu = 'blabla le retour de fonction';
  }

}
