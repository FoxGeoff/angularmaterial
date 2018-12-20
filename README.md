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

## Check: Add full list of components to material.module

## Check: Add FormsModule
* ```import { FormsModule } from '@angular/forms';```

## Check: Add SCSS
* via angular.json
```
"projects:{
    "schematics": {
        "@schematics/angular:component": {
            "styleext": "scss"
        }
    }
}
```
# Module # :Layout -lazyload button
* Run: ``` ng g m demo/demo --flat --routing --dry-run ```
* Run: ```ng g c demo/buttons --dry-run ```
* Code: buttons.component (remove html from app.compoment and move to button.component)
* use <router-outlet></router-outlet> (app.component)
* Update: app.module move the material components to demo.module
* Add: routes to demo-routing.module
* Now test run check

# Module # layout - Flexbox
* Run ```ng g c demo/flexbox ```
* Add to demo-routing.module ```{ path: 'flex', coponent:'flexboxComponent } ```
* Run ```npm install --save @angular/flex-layout```
* Add: (in demo module)
```
import { FlexLayoutModule } from '@angular/flex-layout'; 
...
  FlexLayoutModule 
``` 
* Add html for flexbox component
```
<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
  <div class="flex-item">5</div>
  <div class="flex-item">6</div>
</div>
```
* Add css
```
.flex-container{
    display: flex;
   /* flex-flow: row wrap; */
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-around;
}

@media all and (max-width:800px){
    .flex-container{
        justify-content: flex-start;
    }
}

.flex-item{
    width: 200px;
    height: 150px;
    background: tomato;
    color: white;
    font-weight: bold;
    font-size: 3em;
    text-align: center;
    line-height: 150px;
    margin-top: 5px;
}
```
* Additional ```<div class="flex-container" fxLayout.xs="columns"> ```

## Contact Manager Layout

* Add (folder: contactmanger): contactmanager.module, contactmanager.component,toolbar.component, sidenav component
* Run: ```ng g m contactmanager```
* Run ``` ng g c contactmanager/contactmanager-app --flat --module contactmanager  --dry-run```
* Run: ```ng g c contactmanager/components/toolbar --dry-run ```
* Run: ```ng g c contactmanager/components/main-content```
* Run:``` ng g c contactmanager/components/sidenav```




