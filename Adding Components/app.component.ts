import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { ReferenceComponent } from './reference/reference.component';
import { ReasonComponent } from './reason/reason.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SkillsComponent, FooterComponent, ReferenceComponent, ReasonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('my-first-app');
}
