import { Component,Input } from "@angular/core";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})

export class ToDoListComponent {

    todolist: Array<string> = ['Coffee','Breakfast'];
    newtodo: string;

    constructor() {}

    addTask(){
        this.todolist.push(this.newtodo);
    }
}