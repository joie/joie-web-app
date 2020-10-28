import { ConfirmationDialogComponent } from './../components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AppInjector } from '../../../../../../libs/dyna-form/src/lib/app-injector';

export function Confirmable(
  message = 'Are you sure?',
  submitColor = 'warn',
  submitTxt = 'OK',
  headline?: string,
  width = '250px',
) {

  // service is not injected instantly aot.
  // this needs to run on run time
  const injector = AppInjector.getInjector();
  const getDialog = () => injector.get(MatDialog);

  return (target: object, key: string | symbol, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const dialogRef = getDialog().open(ConfirmationDialogComponent, {
        width,
        data: {message, submitColor, submitTxt, headline},
      });
      const allow = await dialogRef.afterClosed().toPromise();

      if (allow) {
        return original.apply(this, args);
      } else {
        return null;
      }
    };

    return descriptor;
  };
}
