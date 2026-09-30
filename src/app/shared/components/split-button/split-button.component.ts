import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, AfterViewInit, inject } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-split-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './split-button.component.html',
  styleUrl: './split-button.component.scss'
})
export class SplitButtonComponent implements AfterViewInit {
  dropdownValue = '';
  isOpen: 'close' | 'open' | undefined = 'close';

  private renderer = inject(Renderer2)

  @Input() label = '';
  @Input() color: 'default' | 'secondary' | 'success' | 'warning' | 'error' | 'disabled' | undefined;
  @Input() disabled = false;
  @Input() fill: 'solid' | 'outline' | 'clear' | undefined;
  @Input() size: 'small' | 'medium' | 'large' | undefined;
  @Input() uppercase: true | false = false;
  @Input() maxWidth: number | undefined;
  @Input() minWidth: number | undefined;
  @Input() customBGColor: string | undefined;
  @Input() dropdownItems: string[] | undefined = [];

  @Output() eventValue = new EventEmitter<string>();
  @Output() buttonClick = new EventEmitter<Event>();

  @ViewChild('dropdownButton') dropdownButton: ElementRef | undefined;
  @ViewChild('dropdownMenu') dropdownMenu: ElementRef | undefined;





  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.renderer.listen('window', 'click', (e: Event) => {
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
      if (e.target !== this.dropdownButton?.nativeElement && e.target !== this.dropdownMenu?.nativeElement) {
        this.isOpen = 'close';

      }
    });
  }

  setValue(value: string) {
    this.dropdownValue = value;
    this.isOpen = 'close';
    this.eventValue.emit(value);
    // this.isMenuOpen = !this.isMenuOpen
  }

  changeStyle($event: Event) {
    this.isOpen = $event.type == 'click' ? 'open' : 'close';
  }

  buttonClicked(event: Event) {
    this.buttonClick.emit(event);
  }

  splitOpen(event: Event) {
    if (event.currentTarget && this.isOpen === 'open') {
      this.isOpen = 'close';

    } else {
      this.isOpen = 'open';

    }

  }
}
