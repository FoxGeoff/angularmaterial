# Angularmaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Project Work Log

## Check: Install Angular Material

* Run: ```npm install --save @angular/material @angular/cdk```
* Run: ``` npm install --save @angular/animations```
* Add: to app.module.ts
```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
...
...
 imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
```
* Add material components as required:
```
import {MatButtonModule, MatCheckboxModule} from  '@angular/material';
...
   MatButtonModule,
    MatCheckboxModule,
  ],
```

## Check: Improved Angular Material Code handling
* Run: ```ng g m shared/material --dry-run --flat```
* update material.module
```
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from  '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
  ]
})
export class MaterialModule { }
```
* update app.module:
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
* Most components require a theme:
```@import "~@angular/material/prebuilt-themes/indigo-pink.css";```
* check run: add button ```<button mat-button>Click me!</button>```

## Check: Add Gesture support
* Run: ```npm install --save hammerjs```
* update "main.ts ```import 'hammerjs;' ```

## Check: Add material icons
* in index.html 
```<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">```
* Add to material.module ``` MatIconModule ... imports: MatIconModule ...exports: MatIconModule ```
* Run server to check
* Ref.: https://material.angular.io/guides
* Ref.: https://material.angular.io



