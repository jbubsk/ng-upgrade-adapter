import * as angular from 'angular';

export class Ng1InnerComponent {
  title: string = `I'm inner ng1 component`;
}

export const ng1InnerModule = angular.module('Ng1InnerModule', [])
  .component('ng1Inner', {
    controller: Ng1InnerComponent,
    template: `<div>
                   <span>{{$ctrl.title}}</span>
               </div>`
  });
