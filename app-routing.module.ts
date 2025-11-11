import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from './thank-youo/thank-you.component';

const routes: Routes = [
    { path: '', component: ThankYouComponent } // Default page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }