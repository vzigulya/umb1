import { Component } from '@angular/core';
// import { FirstPageModule } from '../../pages/first-page/first-page.module';
//export { FirstPageComponent } from '../../pages/first-page/first-page.component';
@Component({
    selector: 'header',
    templateUrl: './header.component.html', // Auto required by webpack
})
export class HeaderComponent {
    private imgLogo: string;

    constructor( ) {
    this.imgLogo = require("./logo.png");
    };
}
