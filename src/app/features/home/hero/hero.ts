import {
  AfterViewInit,
  Component,
  ElementRef,
  PLATFORM_ID,
  ViewChild,
  inject
} from '@angular/core';

import {
  isPlatformBrowser
} from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements AfterViewInit {

  private readonly platformId =
    inject(PLATFORM_ID);

  @ViewChild('heroVideo')
  heroVideo?: ElementRef<HTMLVideoElement>;


  ngAfterViewInit(): void {

    if (
      isPlatformBrowser(
        this.platformId
      )
    ) {
      this.playVideo();
    }

  }


  playVideo(): void {

    if (
      !isPlatformBrowser(
        this.platformId
      )
    ) {
      return;
    }


    const video =
      this.heroVideo?.nativeElement;


    if (
      !video ||
      typeof video.play !== 'function'
    ) {
      return;
    }


    video.muted = true;
    video.loop = true;


    video
      .play()
      .catch((error) => {

        console.warn(
          'El navegador bloqueó el autoplay:',
          error
        );

      });

  }

}