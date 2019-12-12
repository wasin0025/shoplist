import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular' ; 

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  list: Array<{name:string,price:number}>=[];
  constructor(public navCtrl: NavController) { 
    this.list.push({name:"banana",price:10});
    this.list.push({name:"apple",price:7});
    this.list.push({name:"apple",price:8});
    this.list.push({name:"apple",price:9});
    this.list.push({name:"apple",price:10});
  }

  ngOnInit() {
  }

}
