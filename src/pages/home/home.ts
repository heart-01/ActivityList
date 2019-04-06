import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { ActivityPage } from '../activity/activity';
import { NewactivityPage } from '../newactivity/newactivity';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  addedToDoList:any[]=[];
  tempTodo:any='';
  todoPage=NewactivityPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {

    this.storage.get('todoDetails').then(
      (val)=>{
        this.addedToDoList=val;
      }
    );

  }

  testObj={
    "title":"",
    "description":""
  };

  //เมื่อเริ่มต้นให้โหลดดึงข้อมูลจาก Local Storage
  ngOnInit():void{
    this.storage.get('todoDetails').then(
      (val)=>{
        this.addedToDoList=val;
      }
    );
  }

  //ดึงข้อมูลจาก Local Storage เมื่อเปิดหน้าอื่นแล้วย้อนกลับมายังเพจเดิม
  ionViewWillEnter(){
    this.storage.get('todoDetails').then(
      (val)=>{
        this.addedToDoList=val;
      }
    );
  }

  //ดึงข้อมูลจาก Local Storage เมื่อกรอกข้อมูลครบถ้วน
  ionViewDidEnter(){
    this.storage.get('todoDetails').then(
      (val)=>{
        this.addedToDoList=val;
      }
    );
  }

  //ฟังชั่นสำหรับเปิดหน้าใหม่
  goToAddTodo():void{
    this.navCtrl.push(NewactivityPage);
  }

  //ฟังชั่นสำหรับลบข้อมูลที่เลือก
  removeItem(todo):void{
    let index = this.addedToDoList.indexOf(todo);
    if(index>-1){
      this.addedToDoList.splice(index,1);
      this.storage.set('todoDetails',this.addedToDoList);
    }
  }





}
