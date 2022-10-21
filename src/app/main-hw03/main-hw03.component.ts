import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-hw03',
  templateUrl: './main-hw03.component.html',
  styleUrls: ['./main-hw03.component.scss']
})
export class MainHW03Component implements OnInit {

  public inputTask!: string;
  public task = '';
  public count = 6;

  constructor() { }

  ngOnInit(): void {
  }

  addTask (): void {
    this.task = this.inputTask;
    this.inputTask = '';
    ++this.count;
  }

  changeCount(data:boolean): void{
    if(data){
      --this.count;
    }
  }
}