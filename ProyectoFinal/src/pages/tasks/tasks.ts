import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { TasksService } from '../../providers/tasks-service';


@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  tasks: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public tasksService: TasksService,
    public alertCtrl:AlertController
  ) {}

  ionViewDidLoad() {
    this.tasksService.getAll('8')
    .then((tasks: any) =>{
      this.tasks = tasks;
  
    })
    .catch(error =>{
      console.error(error);
    });
  }

  createTask(){
    let prompt = this.alertCtrl.create({
      title: 'Crear Tarea',
      message: "Ingrese la nueva tarea",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let newTask ={
              title: data.title,
              completed: false
            }

            this.tasksService.create( newTask )
            .then(resultTask =>{
               this.tasks.unshift(resultTask);
            })
            .catch(error =>{
              console.error( error );
            });

          }
        }
      ]
    });
    prompt.present();
  }
  

  onChange( task: any){
    console.log(task);
  }


  updateTask( task: any,index ){
    let prompt = this.alertCtrl.create({
      title: 'Actualizar tarea',
      message: "Digite la nueva tarea",
      inputs: [
        {
          name: 'title',
          value: task.title,
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let updateTaskClone=Object.assign({},task);
            updateTaskClone.title=task.title; //al tratar con el ngmodel directamente puede suceder que no se modifique en la BD pero nosotros si modifiquemos en la UI
            this.tasksService.update( updateTaskClone )
            .then(resultTask =>{
             this.tasks[index]=resultTask; //actualizo mi coleccion
            })
            .catch(error =>{
              console.error( error );
            });
          }
        }
      ]
    });
    prompt.present();
  }

  deleteTask(task:any, index){

    let confirm = this.alertCtrl.create({
      title: 'Eliminar Tarea',
      message: 'Esta seguro de eliminar esta tarea?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.tasksService.delete(task.id)
            .then(resultTask =>{
              this.tasks.splice(index, 1);
            })
            .catch(error =>{
              console.error( error );
            });
          }
        }
      ]
    });
    confirm.present();
  }


}
