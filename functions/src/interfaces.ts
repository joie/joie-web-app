export interface IResponse {
  type: 'success' | 'error';
  message: string;
  data?: any;
}
