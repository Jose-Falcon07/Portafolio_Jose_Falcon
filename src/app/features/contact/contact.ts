import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  private readonly web3FormsUrl = 'https://api.web3forms.com/submit';

  private readonly accessKey =
    '3e6bdb60-adf6-4599-a97f-e1eb5d2a20e9';

  contactForm;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
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

    const formValue = this.contactForm.getRawValue();

    const payload = {
      access_key: this.accessKey,

      name: formValue.name,
      email: formValue.email,
      phone: formValue.phone,

      subject: `Portafolio Jose Falcon - ${formValue.subject}`,

      message: formValue.message,

      from_name: 'Portafolio Jose Falcon',
    };

    this.sending.set(true);

    this.http
      .post<any>(this.web3FormsUrl, payload)
      .subscribe({
        next: (response) => {
          this.sending.set(false);

          if (response.success) {
            this.successMessage.set(
              'Mensaje enviado correctamente. Gracias por contactarme.'
            );

            this.contactForm.reset();
          } else {
            this.errorMessage.set(
              'No se pudo enviar el mensaje. Inténtalo nuevamente.'
            );
          }
        },

        error: (error) => {
          console.error('Error Web3Forms:', error);

          this.sending.set(false);

          this.errorMessage.set(
            'Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.'
          );
        },
      });
  }
}