import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  color = new FormControl('');

  updateColor() {
    this.color.setValue('Nancy');
  }

  myForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.myForm.value);
  }

}
