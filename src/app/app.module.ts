import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PanelModule } from 'primeng/panel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { AppComponent } from './app.component';
import { AvailableSlotsComponent } from './components/available-slots/available-slots.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchByDistrict } from './components/search-slots/components/search-by-district/search-by-district.component';
import { SearchByPincode } from './components/search-slots/components/search-by-pincode/search-by-pincode.component';
import { SlotNotification } from './components/search-slots/components/slot-notification/slot-notification.component';
import { SearchSlotsComponent } from './components/search-slots/search-slots.component';
import { DistrictsService } from './services/districts.service';
import { MemberService } from './services/member.service';
import { ReCaptchaService } from './services/recaptcha.service';
import { StatesService } from './services/states.service';
import { UtilService } from './services/util.service';
import { VaccineSlotsService } from './services/vaccine-slots.service';


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
    FooterComponent,
    AvailableSlotsComponent,
    SearchSlotsComponent,
    SearchByDistrict,
    SearchByPincode,
    SlotNotification,
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
    RecaptchaModule,
    RecaptchaFormsModule,
    ScrollTopModule
  ],
  providers: [DistrictsService, MemberService, ReCaptchaService, StatesService, UtilService, VaccineSlotsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
