import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectorPageComponent } from './selector-page/selector-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'selector', component: SelectorPageComponent },
      { path: '**', component: SelectorPageComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoutriesRoutingModule {}