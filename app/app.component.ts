import {Input, Component} from '@angular/core';

@Component({
  selector: 'ng2-main',
  template: `<div>
                <span>Main ng2 component</span>
                <ng1-inner></ng1-inner>
             </div>`,
})
export class Ng2MainComponent {
  @Input() name = '';
}
