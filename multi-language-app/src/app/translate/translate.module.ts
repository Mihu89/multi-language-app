import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClient,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader : {
        provide : TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    })
  ],
  exports: [TranslateModule]
})
export class NgxTranslateModule { }

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, ',/assets/i18n/','.json')
}