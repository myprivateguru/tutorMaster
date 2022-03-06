import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutsService,Idea } from '../../providers/tuts.service';
import { ToastController,AlertController } from '@ionic/angular';
import * as firebase from 'firebase';
import { snapshotToArray } from "../../../environments/environment";

@Component({
  selector: 'targets',
  templateUrl: './targets.page.html',
  styleUrls: ['./targets.page.scss'],
})
export class TargetsPage implements OnInit {
  items = [];
  ref = firebase.database().ref('ideas').child('/targets');
  constructor(public router: Router,private activatedRoute: ActivatedRoute, private tutService: TutsService,
    private toastCtrl: ToastController,private alertController:AlertController) {
      this.ref.on('value', resp => {
        this.items = [];
        this.items = snapshotToArray(resp);
      });
     }


  ngOnInit() {
  }
    doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
