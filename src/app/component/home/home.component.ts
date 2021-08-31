import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Tasks: Array<any> =[]
  constructor(private tasksSer:TasksService,private title:Title) {
    this.title.setTitle('task manager')

  }

  ngOnInit() {
    this.Tasks = this.tasksSer.Tasks
  }
  deletTask(i){
    this.tasksSer.deletTask(i)
  }
}
