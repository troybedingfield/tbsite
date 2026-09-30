import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  //   template: `
  //   <ng-content></ng-content>
  // `,
  styleUrl: './button.component.scss',
  standalone: true,
})
export class ButtonComponent {
  @Input() label = '';
  @Input() color: 'default' | 'success' | 'warning' | 'error' | 'disabled' | undefined = 'default';
  @Input() disabled: boolean | undefined = false;
  @Input() fill: 'solid' | 'outline' | 'clear' | undefined = 'solid';
  @Input() size: 'small' | 'medium' | 'large' | undefined = 'medium';
  @Input() upperCase: boolean | undefined = false;
  @Input() maxWidth: number | undefined;
  @Input() minWidth: number | undefined;
  @Input() customBGColor: string | undefined;
  @Input() customColor: string | undefined;
  @Input() customBorderColor: string | undefined;
  @Input() buttonType: 'button' | 'submit' | 'cancel' | undefined = 'button'

  @Output()
  buttonClick = new EventEmitter<MouseEvent>();

  handleButtonClick(event: MouseEvent) {
    this.buttonClick.emit(event);
  }


}
