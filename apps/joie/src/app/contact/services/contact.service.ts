import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const PORTAL_ID = '7273456';
const FORM_ID = '28a30675-0e84-49cb-9b62-5e03cb71edc5';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiEndPoint = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`;

  constructor(private http: HttpClient) {}

  postMessage(f) {
    console.log(f);
    const data = {
      // submittedAt: '1517927174000', // This millisecond timestamp is optional.
      // Update the value from "1517927174000" to avoid an INVALID_TIMESTAMP error.
      fields: [
        {
          name: 'email',
          value: 'yinon@hotmail.com',
        },
        {
          name: 'name',
          value: 'Yinon',
        },
      ],
      context: {
        pageUri: 'www.example.com/page',
        pageName: 'Example page',
      },
      legalConsentOptions: {
        consent: {
          // Include this object when GDPR options are enabled
          consentToProcess: true,
          text:
            'I agree to allow Example Company to store and process my personal data.',
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text:
                'I agree to receive marketing communications from Example Company.',
            },
          ],
        },
      },
    };

    return this.http.post(this.apiEndPoint, data);
  }
}
