import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-router',
  templateUrl: './dialog-router.component.html',
  styleUrls: ['./dialog-router.component.scss'],
})
export class DialogRouterComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {}

  // get primaryRoute() {
  //   let route = this.route;
  //   while (route.outlet != 'primary') {
  //     route = route.parent;
  //   }
  //   return route;
  // }

  ngOnInit(): void {
    // console.log('this.route.snapshot', this.route.snapshot);
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(this.route.snapshot.data.dialogComponent, {
      ...this.route.snapshot.data.matDialogConfig,
      // height: '99vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      let { url } = this.router;
      let substringIndex = url.indexOf('/(');
      if (substringIndex === -1) {
        substringIndex = url.indexOf('(');
      }
      url = url.substring(0, substringIndex);
      this.router.navigateByUrl(url);
    });
  }
}
