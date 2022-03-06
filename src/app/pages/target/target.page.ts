import { Component, OnInit } from '@angular/core';
import {IonSlides } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { TutsService,Idea } from '../../providers/tuts.service';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { snapshotToArray } from "../../../environments/environment";

@Component({
  selector: 'target',
  templateUrl: './target.page.html',
  styleUrls: ['./target.page.scss'],
})
export class TargetPage implements OnInit {
  items = [];
  ref = firebase.database().ref('ideas').child('/targets');
  topicText :string='';
  dateText: string='';
  subjectText: string='';
  standardText: string='';
  modeText: string='';
  currDate: string='';
  constructor(public router: Router,private activatedRoute: ActivatedRoute, private tutService: TutsService,
    private toastCtrl: ToastController) {
      this.ref.on('value', resp => {
        this.items = [];
        this.items = snapshotToArray(resp);
      });
     }

     addItem(item) {
    
      item['Topic'] = this.topicText;
      item['Date'] = this.dateText;
      item['Subject'] = this.subjectText;
      item['Standard'] = this.standardText;
      item['Mode'] = this.modeText;      
      item['timeDate'] = this.currDate=new Date().toISOString();
      
  
      
    console.log(item,' data added successfully!');
    if(item!==undefined &&item!== null){
        let newItem = this.ref.push(); 
        newItem.set(item) ;
          
        
        }
      }

  ngOnInit() {
  }

}
