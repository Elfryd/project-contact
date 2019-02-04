import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

const routes: Routes = [
  {path: 'list', component: ContactListComponent},
  {path: 'add', component: ContactAddComponent},
  {path: 'view/:key', component: ContactViewComponent},
  {path: 'edit/:key', component: ContactEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
