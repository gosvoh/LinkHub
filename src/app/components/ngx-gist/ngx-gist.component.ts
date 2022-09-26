import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ngx-ggist',
  templateUrl: './ngx-gist.component.html',
  styleUrls: ['./ngx-gist.component.scss'],
})
export class NgxGgistComponent implements OnInit, AfterViewInit {
  @ViewChild('iframe') iframe: ElementRef | undefined;
  @Input() user: string = '';
  @Input() scriptId: string = 'dab6058aab6491b1da49336887d9d935';
  @Input() lines: number[] = [];
  @Input() width: string = '100%';
  @Input() height: string = '100%';

  public scriptSrc: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.scriptSrc = `https://gist.github.com/${this.user}/${this.scriptId}.js`;
  }

  ngAfterViewInit() {
    const doc = this.iframe?.nativeElement.contentDocument || this.iframe?.nativeElement.contentElement.contentWindow;
    const content = `
      <html>
        <head>
          <base target="_parent">
        </head>
        <body><script type="text/javascript" src="${this.scriptSrc}"></script></body>
      </html>`;
    doc?.open();
    doc?.write(content);
    doc?.close();

  }
}
