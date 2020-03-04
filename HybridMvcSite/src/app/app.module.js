import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './app.component';
//Includes for default/base pages.
import { DefaultComponent } from './AngularControllers/_default.component';
//Includes for project pages.
import { RecipesComponent } from './AngularControllers/recipe.component';
//Includes for Error pages.
import { ErrorsPageNotFoundComponent } from './AngularControllers/errors-page-not-found.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            DefaultComponent,
            RecipesComponent,
            ErrorsPageNotFoundComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map