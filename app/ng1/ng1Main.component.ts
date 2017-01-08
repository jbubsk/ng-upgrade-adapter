import * as angular from 'angular';

export const ng1MainModule = angular.module('ng1MainModule', [])
  .component('ng1Main', {
    template: `<div>
                  <span>Main ng1 component</span>
               </div>`
  });
