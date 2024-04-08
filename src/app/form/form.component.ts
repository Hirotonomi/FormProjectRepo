import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  // //somestuff seeing how it works
  // color = new FormControl('');
  // updateColor() {
  //   this.color.setValue('Nancy');
  // }
  // myForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // })
  

  // actual code now
  generatedFromGroup = new FormGroup({

  })
  onSubmit() {
    // TODO: send request POST
    console.warn(this.generatedFromGroup.value);
  }
}
