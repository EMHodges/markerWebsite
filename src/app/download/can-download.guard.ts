import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { DownloadService } from './download.service';

@Injectable({
  providedIn: 'root'
})
export class CanDownloadGuard implements CanActivate, OnDestroy {

  private canDownload: boolean = false;
  private ngUnsubscribe = new Subject();

  constructor(private router: Router, private downloadService: DownloadService) {
    this.downloadService.canDownload()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(canDownload => this.canDownload = canDownload)
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.canDownload) {
      this.router.navigate(['ethics']);
    }
    return this.canDownload
   //return true
  }
  
  ngOnDestroy(){
    this.ngUnsubscribe.next(undefined);
    this.ngUnsubscribe.complete();
  }
}
