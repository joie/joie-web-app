import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-router',
  templateUrl: './dialog-router.component.html',
  styleUrls: ['./dialog-router.component.scss'],
})
export class DialogRouterComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(
      this.route.snapshot.data.dialogComponent,
      {
        ...this.route.snapshot.data.matDialogConfig,
        position: {
          bottom: '0px',
        },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed with:', result);
      console.log(this.route.parent.snapshot.params);

      const redirectUrl = result?.redirectUrl;
      console.log(redirectUrl);
      if (redirectUrl) {
        this.router.navigateByUrl(redirectUrl);
      } else {
        // this.router.navigate([{ outlets: { popup: null } }]);
        this.router.navigate([
          this.route.parent.snapshot.params,
          { outlets: { popup: null } },
        ]);
      }
    });
  }
}