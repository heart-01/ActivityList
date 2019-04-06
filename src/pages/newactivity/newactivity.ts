import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewactivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 import { Validators, FormGroup, FormControl } from '@angular/forms';
 import { Storage } from '@ionic/storage';
 import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-newactivity',
  templateUrl: 'newactivity.html',
})
export class NewactivityPage {

  title:any;
  description:any;
  addedToDo:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    this.storage=storage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewactivityPage');
  }

  saveRecords():void{
    let todoObj={
      title:"",
      description:""
    };
    todoObj.title=this.title;
    todoObj.description=this.description;
    this.storage.get('todoDetails').then(
      (val)=>{
        if(val){
          this.addedToDo=val;
          this.addedToDo.push(todoObj);
          this.storage.set('todoDetails', this.addedToDo);
        }
        else{
          this.addedToDo.push(todoObj);
          this.storage.set('todoDetails',this.addedToDo);
        }
      }
    );
    this.title="";
    this.description="";
    this.navCtrl.pop();
  }
  
}
