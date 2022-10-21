import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-hw03',
  templateUrl: './child-hw03.component.html',
  styleUrls: ['./child-hw03.component.scss']
})
export class ChildHW03Component implements OnInit {

  public taskData = [
    { name: 'HTML5', check: true},
    { name: 'CSS3', check: true},
    { name: 'SCSS', check: false},
    { name: 'JavaScript', check: false},
    { name: 'jQuery', check: false},
    { name: 'Angular', check: false}
  ]
  public status!: string;
  public editStatus = false;
  public editIndex!: number;
  public editValue!: string;
  public minusTask = false;

  @Input('newTask') 
  set newTask(newTask: string){
    if (newTask){
    let task = { name: newTask, check: false};
    this.taskData.push(task);
    }
  }

  @Output() fromChild = new EventEmitter;

  constructor() { }

  ngOnInit(): void {}

  deleteTask(index: number): void{
    this.taskData.splice(index, 1);
    this.fromChild.emit(true); 
  }

  editTask(index: number): void{
    this.editStatus = true;
    this.editIndex = index;
    this.editValue = this.taskData[index].name;
  }

  saveEdit(): void{
    this.taskData[this.editIndex].name = this.editValue;
    this.editValue ='';
    this.editStatus = false;
  }
}