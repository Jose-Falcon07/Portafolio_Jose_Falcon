import {CommonModule} from '@angular/common';
import {Component, signal} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  sending = signal(false);
  successMessage = signal('');
  errorMessage = signal('');

  contactForm;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.nonNullable.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(150),
      ]],
      subject: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150),
      ]],
      phone: ['', [
        Validators.maxLength(30),
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(3000),
      ]],
    });
  }

  submit(): void {
    this.successMessage.set('');
    this.errorMessage.set('');

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    /*
     * Firebase Functions será conectado al final,
     * cuando activemos el plan Blaze.
     */
    this.successMessage.set(
      'El formulario está listo. El envío se activará al conectar Firebase.'
    );
  }
}
