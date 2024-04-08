import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SService } from '../s.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [SService]
})
export class FormComponent implements OnInit{
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
  generatedFromGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private SServise: SService){}

  ngOnInit(): void {
    this.generatedFromGroup = this.formBuilder.group({})
    const formData = this.SServise.jsonForForm

    formData.forEach(field => {
      this.generatedFromGroup.addControl(field.name, new FormControl(''));
    });
    
  }

  onSubmit() {
    // TODO: send request POST
    console.warn(this.generatedFromGroup.value);
  }
}
