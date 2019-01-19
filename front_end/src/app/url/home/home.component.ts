// home.component.ts
//  - home component declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ClipboardService } from 'ngx-clipboard';
import { Meta, Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// custom modules
import { UrlService } from '@app/url/url.service';

// creating the component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // component variable declarations
  public context = {};
  public shortenedUrls = [];
  public urlForm: FormGroup;
  private componentName = 'home';

  constructor(
    public meta: Meta,
    public title: Title,
    public router: Router,
    public snackBar: MatSnackBar,
    public urlService: UrlService,
    public formBuilder: FormBuilder,
    public clipboardService: ClipboardService
  ) {
    // creating the url form validation group
    this.urlForm = formBuilder.group({
      url: ['', [Validators.required, Validators.minLength(1)]]
    });

    // adding title
    title.setTitle('Neueda Challenge');

    // adding meta tags to the component
    meta.addTags([
      {
        name: 'author',
        content: 'Bruno Duarte Brito'
      },
      {
        name: 'keywords',
        content: 'neueda'
      },
      {
        name: 'description',
        content: 'Neueda front-end challenge by Bruno Duarte Brito'
      }
    ]);
  }

  /**
   * @description Copies target URL to clipboard
   * @param url URL to be copied
   */
  copyUrl(url: string): void {
    this.clipboardService.copyFromContent(url);
    this.snackBar.open(`${url} copied to clipboard`);
  }

  /**
   * @description Submits a URL to the backend
   * @param url URL to be sent for shortening
   */
  submitUrl(url: string): void {
    // resetting the url form
    this.urlForm.reset();

    // sending a url to the API
    this.urlService.sendUrl(url).subscribe(
      response => {
        // pushing the received url to the list
        this.shortenedUrls.push(response);
        this.snackBar.open(`${url} has been shortened`);
      },
      response => {
        // showing snackbar notification
        this.snackBar.open(response.error.message);
      }
    );
  }
}
