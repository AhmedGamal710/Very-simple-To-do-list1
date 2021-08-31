import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskSer:TasksService,private title:Title, private route:Router) {
    this.title.setTitle('add new title')
  }

  ngOnInit() {
  }
  saveTask(title,des){
    this.taskSer.saveTask(title.value, des.value)
    this.route.navigate(['/'])
  }
}
