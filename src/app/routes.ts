import { Routes } from "@angular/router";
import { CanDownloadGuard } from "./download/can-download.guard";
import { DownloadComponent } from "./download/download.component";
import { EthicsComponent } from "./ethics/ethics.component";
import { HomepageComponent } from "./homepage/homepage.component";

export const appRoutes:Routes = [
    { path: 'ethics', component: EthicsComponent },
    { path: 'home', component: HomepageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'download', component: DownloadComponent, canActivate:[CanDownloadGuard] },

]