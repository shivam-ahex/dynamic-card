import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dynamic-card', pathMatch: 'full' },

  {
    path: 'dynamic-card',
    loadChildren: () =>
      import('./modules/dynamic-card/dynamic-card.module').then(
        (m) => m.DynamicCardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
