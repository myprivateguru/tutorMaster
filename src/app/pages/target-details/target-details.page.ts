import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutsService,Idea } from '../../providers/tuts.service';
import { ToastController,AlertController } from '@ionic/angular';
import * as firebase from 'firebase';
import { snapshotToArray ,snapshotToObject} from "../../../environments/environment";

@Component({
  selector: 'target-details',
  templateUrl: './target-details.page.html',
  styleUrls: ['./target-details.page.scss'],
})
export class TargetDetailsPage implements OnInit {
  items = [];
  ref = firebase.database().ref('ideas').child('/targets');
  item = {};
  hideMe: boolean;
  constructor(private route: ActivatedRoute,private alertCtrl:AlertController,private toastCtrl:ToastController,
    public router: Router) {
    firebase.database().ref('ideas/targets/'+this.route.snapshot.paramMap.get('key')).on('value', resp => {
      this.item = snapshotToObject(resp);
    });
    
  }

  ngOnInit() {
  }
  async reportClick(){
    const toast = await this.toastCtrl.create({
      message: 'Enquiry is reported for moderation',
      duration: 8000
    });
    await toast.present();
  }
  hide(hideMe){
    this.hideMe=true;
  }
  async toggleFavorite() {
    if (this.toggleFavorite) {
      
      const toast = await this.toastCtrl.create({
        message: 'Removed from Favorites.',
        duration: 3000
      });
      await toast.present();
    } else {
      
      const toast = await this.toastCtrl.create({
        message: 'Added to your Favourites.',
        duration: 3000
      });
      await toast.present();
    }
  }

  async shareSession() {
    const toast = await this.toastCtrl.create({
      message: 'This will share your Enquiry.',
      duration: 3000
    });
    await toast.present();
    
     
    console.log('Clicked share session');
  }
}
