import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { MyValidators } from '../../validators/validators';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  myForm: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuiler: FormBuilder) {

                this.myForm = this.formBuiler.group({
                  'email': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
                  'nickname': ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
                  'age': ['', [Validators.required, MyValidators.isOld]],
                  'passwordGroup': this.formBuiler.group({
                    'password': ['',[Validators.required]],
                    'confirmPassword': ['', [Validators.required]],
                  }, {
                    validator: MyValidators.passwordMatcher
                  }),
                  'rockband': ['3', [Validators.required]],
                  'date': ['', [Validators.required]],
                  'children': [5],
                  'language': ['go'],
                  'enablePush': [false],
                  'enableEmail': [true],
                  'vainilla': [false],
                  'chocolate': [true],
                  'fresa': [true]
                });
                //valores por defecto
                let obj = {
                  'email': 'facu@gmail.com',
                  'age': 19,
                  'children': 10,
                  'nickname': 'fakiu'
                }
            
                this.myForm.patchValue(obj);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  goToHomePage(){
    this.navCtrl.setRoot( HomePage );
  }

  saveData(event: Event){
    event.preventDefault();

    console.log(this.myForm.value);
    console.log(this.myForm.value.age);
    console.log(this.myForm.value.nickname);
    console.log(this.myForm.value.passwordGroup.password);
    console.log(this.myForm.value.passwordGroup.confirmPassword);
  }

}
