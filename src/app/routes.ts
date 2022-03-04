import { Routes } from "@angular/router";
import { CanDownloadGuard } from "./download/can-download.guard";
import { DownloadComponent } from "./download/download.component";
import { EthicsComponent } from "./ethics/ethics.component";

export const appRoutes:Routes = [
    { path: 'ethics', component: EthicsComponent },
    { path: '', redirectTo: '/ethics', pathMatch: 'full'},
    { path: 'download', component: DownloadComponent, canActivate:[CanDownloadGuard] },

]