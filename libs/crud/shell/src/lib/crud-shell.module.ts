import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: 'crud-list',
        loadChildren: () =>
          import('@eval/crud/list').then((module) => module.CrudListModule),
      },
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class CrudShellModule {}
