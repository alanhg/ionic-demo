import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

/*
 Generated class for the More page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-more',
    templateUrl: 'more.html'
})
export class MorePage {

    constructor(public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        console.log('Hello More Page');
    }

}
