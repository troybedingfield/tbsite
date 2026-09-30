import { Component } from '@angular/core';
import { TopHomeSectionComponent } from "../top-home-section/top-home-section.component";
import { SkillsComponent } from "../skills/skills.component";
import { AboutComponent } from "../about/about.component";
import { WorkComponent } from "../work/work.component";

@Component({
  selector: 'app-home',
  imports: [TopHomeSectionComponent, SkillsComponent, AboutComponent, WorkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
