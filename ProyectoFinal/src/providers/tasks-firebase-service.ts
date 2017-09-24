import { Injectable } from '@angular/core';

import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';
import 'rxjs/add/operator/map';


@Injectable()
export class TasksFirebaseService {
  tasks: FirebaseListObservable<any>;

  constructor(public fireDatabase: AngularFireDatabase) {
    this.tasks = this.fireDatabase.list('/tasks'); //inicializamos para indicarle que vamos a estar escuchando a una base de datos 
  }

  getAll(){
    return this.tasks;
  }

  create(task: any){
    return this.tasks.push( task );
  }

  update(task: any){
    return this.tasks.update(task.$key, {
      title: task.title,
      completed: task.completed
    });
  }

  delete(task: any){
    return this.tasks.remove( task.$key );
  }

}
