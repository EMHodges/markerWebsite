import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor(private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: any) { }

  ngOnInit(): void {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://formfacade.com/public/108681976523810358966/all/form/1FAIpQLSfsgf3-M9WaeUvA1TnrjZb0WXvL9fppHHxaOZQL9Q9199SUVw';
    s.text = `https://formfacade.com/public/108681976523810358966/all/form/1FAIpQLSfsgf3-M9WaeUvA1TnrjZb0WXvL9fppHHxaOZQL9Q9199SUVw`;
    this.renderer2.appendChild(this._document.body, s);

  }

}
