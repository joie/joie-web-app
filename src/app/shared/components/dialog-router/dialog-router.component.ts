import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-router',
  templateUrl: './dialog-router.component.html',
  styleUrls: ['./dialog-router.component.scss'],
})
export class DialogRouterComponent implements OnInit {
  constructor(private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(
      this.route.snapshot.data.dialogComponent,
      this.route.snapshot.data.matDialogConfig
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed with:', result);
    });
  }
}
