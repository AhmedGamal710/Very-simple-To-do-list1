import { Injectable } from '@angular/core';
import { Tasks } from '../interface/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  Tasks: Array<Tasks> =[]

  constructor() {
    let saveTasks = localStorage.getItem('Tasks')
    if (saveTasks) this.Tasks = JSON.parse(saveTasks);
    else this.Tasks = []
  }

  deletTask(i){
    this.Tasks.splice(i,1)
    this.saveAll()
  }
  saveTask(title,description){
    this.Tasks.push(
      {
        title,
        description
      }
    )
    this.saveAll()
  }
  editTask(i, data){
    this.Tasks[i] = data
    this.saveAll()
  }
  saveAll(){
    localStorage.setItem('Tasks',JSON.stringify(this.Tasks))
  }
}
