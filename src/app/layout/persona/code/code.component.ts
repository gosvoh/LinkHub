import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  scripts = [
    'https://gist.github.com/NetanelBasal/0f5d932406d0db5323ea4f4f9cfd90e5.js',
    'https://gist.github.com/NetanelBasal/0f5d932406d0db5323ea4f4f9cfd90e5.js',
  ];

  constructor() {}

  ngOnInit(): void {}
}
