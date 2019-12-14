import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.page.html',
  styleUrls: ['./addlist.page.scss'],
})
export class AddlistPage implements OnInit {
  // create ngModel of 3 variables
  // create submit method
  // 1. create objecfrom 3 variables
  // 2. set three variables to ""
  // 3. add object to firebase

  budget: number;
  itemName: string;
  price: number;
  username: any;


  constructor(private afAuth: AngularFireAuth, private afStore: AngularFirestore, private router: Router) {

  }

  submit() {
    const item = { username: this.username, itemName: this.itemName, price: this.price };
    const collections = this.afStore.collection('lists');
    collections.add(item);
    //this.router.navigate(['list']);    
  }

  ngOnInit() {
    this.username = this.afAuth.user.subscribe(user => {
      this.username = user.displayName;
    })
  }

}
