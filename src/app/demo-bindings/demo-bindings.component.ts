import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx'

@Component({
  selector: 'app-demo-bindings',
  templateUrl: './demo-bindings.component.html',
  styleUrls: ['./demo-bindings.component.scss'],
})
export class DemoBindingsComponent implements OnInit {

  public form: FormGroup
  public bateau: string = "bruit de vague"

  constructor(private formBuilder: FormBuilder, private localNotif: LocalNotifications) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl(18, [Validators.max(120), Validators.pattern('[0-9]*')]),
      password: new FormControl('', Validators.pattern('[0-9,A-Z,a-z,!] {4,9}'))
    })
  }

  ngOnInit() { }

  submit() {
    if (this.form.valid) {

      console.log(this.form.value)
    } else {

      console.error(this.form.controls);
    }
  }

  notif() {
    this.localNotif.schedule({
      text: "Ma premiere notif"
    })
  }

}