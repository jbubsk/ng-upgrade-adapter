import {NgModule, forwardRef}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2MainComponent}  from './app.component';
import {UpgradeAdapter} from '@angular/upgrade';

export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

@NgModule({
  imports: [BrowserModule],
  declarations: [Ng2MainComponent, upgradeAdapter.upgradeNg1Component('ng1Inner')],
  bootstrap: [Ng2MainComponent]
})
export class AppModule {
}
