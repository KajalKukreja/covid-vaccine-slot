import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchSlotsComponent } from './components/search-slots/search-slots.component';
import { SearchByDistrict } from './components/search-slots/components/search-by-district/search-by-district.component';
import { SearchByPincode } from './components/search-slots/components/search-by-pincode/search-by-pincode.component';
import { AvailableSlotsComponent } from './components/available-slots/available-slots.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'app-available-slots',
    pathMatch: 'full'
  },
  {
    path: 'app-available-slots',
    component: AvailableSlotsComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvailableSlotsComponent,
    SearchSlotsComponent,
    SearchByDistrict,
    SearchByPincode,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AccordionModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    FieldsetModule,
    InputNumberModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    TableModule,
    TabViewModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
