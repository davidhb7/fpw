import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuadm',
  templateUrl: './menuadm.component.html',
  styleUrls: ['./menuadm.component.css']
})
export class MenuadmComponent implements OnInit {

  constructor(

    private router: Router
  ) { }

  ngOnInit(): void {
  }
}
