import { Routes } from "@angular/router";
import { DownloadComponent } from "./download/download.component";
import { EthicsComponent } from "./ethics/ethics.component";

export const appRoutes:Routes = [
    { path: 'ethics', component: EthicsComponent },
    { path: 'download', component: DownloadComponent },
    { path: '', redirectTo: '/ethics', pathMatch: 'full'}
]