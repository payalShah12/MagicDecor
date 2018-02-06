import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-or-user',
  templateUrl: './admin-or-user.component.html',
  styleUrls: ['./admin-or-user.component.css']
})
export class AdminOrUserComponent implements OnInit {

  constructor(private guard: AuthGuard, private router: Router) {
  
   }
   redirectto(userType){
     this.guard.userType = userType;
    if(userType == 'user'){
      this.router.navigate(['user'])
    }
    else{
      this.router.navigate(['admin'])      
    }

   }

  ngOnInit() {
  }

}
