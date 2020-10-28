import { ConfirmationDialogComponent } from './../components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Injector } from '@angular/core';

export function Confirmable(
  headline?: string,
  message = 'Are you sure?',
  type = 'primary',
  submitTxt = 'OK'
) {
  const injector = Injector.create({ providers: [{ provide: MatDialog, deps: [] }] });

  // service is not injected instantly aot.
  // this needs to run on run time
  const getDialog = () => injector.get(MatDialog);

  return (target: object, key: string | symbol, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;
    console.log('aaaa')
    descriptor.value = async function (...args: any[]) {
      const dialogRef = getDialog().open(ConfirmationDialogComponent, {
        width: '45rem',
        data: [headline, message, type, submitTxt],
        role: 'alertdialog',
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
