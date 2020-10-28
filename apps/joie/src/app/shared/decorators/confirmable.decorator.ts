import { ConfirmationDialogComponent } from './../components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AppInjector } from '../../../../../../libs/dyna-form/src/lib/app-injector';

export async function Confirmable(
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

  const dialogRef = getDialog().open(ConfirmationDialogComponent, {
    width,
    data: {
      message,
      submitColor,
      submitTxt,
      headline,
    },
  });

  return await dialogRef.afterClosed().toPromise() as Promise<boolean>;
}
