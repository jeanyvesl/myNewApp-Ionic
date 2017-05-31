import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {

  title;
  note;
  icon;

  constructor(public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.note = this.navParams.get('item').note;
    this.icon = this.navParams.get('item').icon;
  }

}
