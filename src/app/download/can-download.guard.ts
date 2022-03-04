import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DownloadService } from './download.service';

@Injectable({
  providedIn: 'root'
})
export class CanDownloadGuard implements CanActivate {

  private canDownload: boolean = false;

  constructor(private router: Router, private downloadService: DownloadService) {
    downloadService.canDownload().subscribe(canDownload => this.canDownload = canDownload)
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.canDownload) {
      this.router.navigate(<any[]><unknown>'');
    }
    console.log(this.canDownload)
    return this.canDownload
  }
  
}
