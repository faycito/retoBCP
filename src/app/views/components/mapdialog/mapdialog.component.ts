import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'bcp-mapdialog',
  templateUrl: './mapdialog.component.html',
  styleUrls: ['./mapdialog.component.scss']
})
export class MapdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MapdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
 ) { }

  ngOnInit(): void {
  }

}
