import { firebase } from './firebase';
import { kalturaConfig } from './kaltura.config';

export const environment = {
  production: true,
  api_url: 'http://localhost:5001/joie-app/us-central1', // @TODO: change this with the production api url
  firebase,
  kalturaConfig,
};
