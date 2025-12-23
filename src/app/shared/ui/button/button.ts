import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  public label = input<string>();
  public disabled = input<boolean>(false);
  public type = input<'primary' | 'secondary' | 'tertiary'>('primary');
  public size = input<'small' | 'medium' | 'large' | 'fullwidth'>('medium');
  public icon = input<string | null>(null);
  public iconPosition = input<'left' | 'right'>('left');
}
