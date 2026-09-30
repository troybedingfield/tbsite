import { Component } from '@angular/core';
import { SkillCardComponent } from "./skill-card/skill-card.component";

@Component({
  selector: 'app-skills',
  imports: [SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  languagesText = ["HTML", "CSS", "TypeScript", "C#", "JavaScript", "PHP"]
  languagesImg = ["HTML", "CSS", "TypeScript", "Csharp", "JavaScript", "PHP"]

  frameworksText = [".NET", "ANGULAR", "REACT", "Next.js", "Tailwind", "Bootstrap"]
  frameworksImg = ["DOTNET", "ANGULAR", "REACT", "Nextjs", "Tailwind", "Bootstrap"]

  databaseText = ["PostgreSQL", "MySQL", "Microsoft SQL Server", "Supabase"]
  databaseImg = ["PostgreSQL", "MySQL", "MicrosoftSQLServer", "Supabase"]

  designText = ["Figma", "Adobe Suite"]
  designImg = ["Figma", "Adobe"]

  toolsText = ["Git", "GitHub", "Docker", "Storybook"]
  toolsImg = ["Git", "GitHub", "Docker", "Storybook"]

  cmsText = ["Wordpress", "Drupal"]
  cmsImg = ["Wordpress", "Drupal"]

}
