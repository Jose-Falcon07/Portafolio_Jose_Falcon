import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-navbar',
    imports: [],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss'
})
export class navbar{
    menuOpen = signal(false);
    toggleMenu(): void {
        this.menuOpen.update(value => !value);
    }

    closeMenu(): void{
        this.menuOpen.set(false);
    }
}