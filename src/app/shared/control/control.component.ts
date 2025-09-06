import { Component, inject, ElementRef, HostBinding, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onCClick()',
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  label = input.required<string>();
  private el = inject(ElementRef)

  onClick() {
    console.log('Control clicked');
    console.log(this.el);
  }
}
