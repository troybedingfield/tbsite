import { Component, inject } from '@angular/core';
import { SplitButtonComponent } from "../split-button/split-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [SplitButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router);
  dropdownValue: string | undefined;


  viewResume() {


    if (this.dropdownValue === 'PDF') {
      window.open('troy-bedingfield-resume.pdf');
    } else if (this.dropdownValue === 'DOC') {
      window.open('troy-bedingfield-resume.doc');
    }
    else {
      window.open('troy-bedingfield-resume.pdf');
    }
  }

  handleValue(event: string) {
    this.dropdownValue = event
  }

  handleButton(event: Event) {
    if (event.type == 'click' && this.dropdownValue === 'PDF') {
      window.open('troy-bedingfield-resume.pdf');
    } else if (event.type == 'click' && this.dropdownValue === 'DOC') {
      window.open('troy-bedingfield-resume.doc');
    }
    else {
      window.open('troy-bedingfield-resume.pdf');
    }
  }

  goHome(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('/');
  }


}
