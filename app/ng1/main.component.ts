import * as angular from 'angular';
import {upgradeAdapter} from "../app.module";
import {AppComponent} from "../app.component";

class RootController {
  name = 'Goga';
}

export const rootModule = angular.module('Ng1Root', [])
  .component('root', {
    controller: RootController,
    template: `<div>
                    <h1>Ng1</h1>
                    <my-app [name]="$ctrl.name"></my-app>
               </div>`
  })
  .directive('myApp', upgradeAdapter.downgradeNg2Component(AppComponent) as angular.IDirectiveFactory);
