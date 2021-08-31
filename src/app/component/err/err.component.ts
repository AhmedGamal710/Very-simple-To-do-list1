import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-err',
  templateUrl: './err.component.html',
  styleUrls: ['./err.component.css']
})
export class ErrComponent implements OnInit {

  constructor(private title:Title) {
    this.title.setTitle('not found')
  }

  ngOnInit() {
  }

}
