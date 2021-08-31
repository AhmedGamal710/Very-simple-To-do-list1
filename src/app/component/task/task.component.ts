import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskId;
  task;
  constructor(private taskSer:TasksService,private title:Title,
    private rout:Router, private route: ActivatedRoute) {
      this.title.setTitle('task manager')
    }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id')
    console.log(this.taskId)
    this.task= this.taskSer.Tasks[this.taskId]
  }
  deleteTask(){
    this.taskSer.deletTask(this.taskId)
  }
  saveTask(){
    this.taskSer.editTask(this.taskId,this.task)
    this.rout.navigate(['/'])

  }

}
