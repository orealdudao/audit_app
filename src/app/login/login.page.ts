import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";

// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',

  // template: `
  //   <form #form="ngForm" (ngSubmit)="logForm(form)" novalidate>
  //     <ion-item>
  //       <ion-label>Todo</ion-label>
  //       <ion-input type="text" required [(ngModel)]="todo.title" ngControl="title"></ion-input>
  //     </ion-item>
  //     <ion-item>
  //       <ion-label>Description</ion-label>
  //       <ion-textarea [(ngModel)]="todo.description" ngControl="description"></ion-textarea>
  //     </ion-item>
  //     <button ion-button type="submit" block>Add Todo</button>
  //   </form>
  // `,


  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  [x: string]: any;
  todo = {}
  navCtrl: any;
  logForm() {
    console.log(this.todo)
  }
  constructor(private  router:  Router) { 
  //constructor(private  authService:  AuthService, private  router:  Router) { 
    // auth.handleAuthentication();
  }
  //constructor(private  router:  Router) { }

  ngOnInit() {
  }
 
  
  login(form){
    this.authService.login(form.value).subscribe((res)=>{
      this.router.navigateByUrl('/tab2');
    });
  }
}