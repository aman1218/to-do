import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [
    new Task({
      taskId: '1',
      taskName: 'Get groceries',
      taskDescription: 'groceries such as milk, eggs and veggies',
      isCompleted: false
    }),
    new Task({
      taskId: '2',
      taskName: 'Brush Teeth',
      taskDescription: 'brush teeth for 10 mins',
      isCompleted: false
    }),
    new Task({
      taskId: '3',
      taskName: 'Eat breakfast',
      taskDescription: 'eat it well',
      isCompleted: false
    }),
    new Task({
      taskId: '4',
      taskName: 'Pet Dog',
      taskDescription: 'hes a good boy',
      isCompleted: false
    }),
    new Task({
      taskId: '5',
      taskName: 'Feed Dog',
      taskDescription: 'pedigree to dog',
      isCompleted: false
    })
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
