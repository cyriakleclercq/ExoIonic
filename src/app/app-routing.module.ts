import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { CarrousselComponent } from './carroussel/carroussel.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'bindings', pathMatch: 'full' },
  { path: 'bindings', component: DemoBindingsComponent },
  { path: 'carroussel', component: CarrousselComponent },
  { path: 'chat', component: ChatComponent }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
