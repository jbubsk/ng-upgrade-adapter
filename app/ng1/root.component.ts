import * as angular from 'angular';
import {upgradeAdapter} from "../app.module";
import {Ng2MainComponent} from "../app.component";
import {ng1InnerModule} from "./ng1Inner.component";
import {ng1MainModule} from "./ng1Main.component";

class RootController {
  name = 'Goga';
}

export const rootModule = angular.module('Ng1Root', [
  ng1InnerModule.name,
  ng1MainModule.name
])
  .component('root', {
    controller: RootController,
    template: `
              <div>
                <div style="display: inline-block">
                    <!--Ng1-->
                    <ng1-main></ng1-main>
                </div>
                <div style="display: inline-block">
                    <!--Ng2-->
                    <ng2-main [name]="$ctrl.name"></ng2-main>
                </div>
              </div>
          `
  })
  .directive('ng2Main', upgradeAdapter.downgradeNg2Component(Ng2MainComponent) as angular.IDirectiveFactory);
