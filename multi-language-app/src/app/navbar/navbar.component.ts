import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  siteLanguage ='English';
  languageList = [
    { code: "en", label: 'English'}, 
    { code: "ru", label: 'Russian'}, 
    { code: "ro", label: 'Romanian'}, 
  ]
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ro', 'ru']);
    translate.setDefaultLang('en');
   }

  ngOnInit(): void {
  }

  changeSiteLanguage(localeCode : string): void {
    this.translate.use(localeCode);
//   const selectedLanguage = this.languageList.find(
//   (language) => language.code === localeCode)?.label.toString();

//  if(selectedLanguage){
//    this.siteLanguage = selectedLanguage;
//    this.translate.use(localeCode);
//  }
//  const currentLanguage = this.translate.currentLang;
//  console.log('Current language ', currentLanguage);
  }
}
