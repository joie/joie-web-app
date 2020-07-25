import { Component } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-subscribe-to-newsletter',
  templateUrl: './subscribe-to-newsletter.component.html',
  styleUrls: ['./subscribe-to-newsletter.component.scss'],
})
export class SubscribeToNewsletterComponent {
  emailForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  private mailChimpEndpoint =
    // 'https://username.us6.list-manage.com/subscribe/post-json?u=abc123&amp;id=123&';
    'https://joie.us19.list-manage.com/subscribe/post?u=9df4f342954b6d86a623a15dd&amp;id=0576397843';
  error = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  onSubmit() {
    if (this.emailForm.valid) {
      console.log(this.emailForm.value);
      const params = new HttpParams()
        .set('EMAIL', this.emailForm.get('email').value)
        .set('b_123abc123abc123abc123abc123abc123abc', ''); // hidden input name

      const mailChimpUrl = this.mailChimpEndpoint + params.toString();

      // 'c' refers to the jsonp callback param key. This is specific to Mailchimp
      this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(
        (response) => {
          if (response.result && response.result !== 'error') {
          } else {
            this.error = response.msg;
          }
        },
        (error) => {
          console.error(error);
          this.error = 'Sorry, an error occurred.';
        }
      );
    }
  }
}
