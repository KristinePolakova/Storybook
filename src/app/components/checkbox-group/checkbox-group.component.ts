import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../checkbox/checkbox.component';

export interface CheckboxItem {
  label: string;
  checked: boolean;
  isInvalid?: boolean;
  isLabelHidden?: boolean;
  isLarge?: boolean;
}

@Component({
  selector: 'app-checkbox-group',
  standalone: true,
  imports: [CheckboxComponent, CommonModule],
  templateUrl: './checkbox-group.component.html',
  styleUrl: './checkbox-group.component.scss',
})
export class CheckboxGroupComponent {
  // Array of checkbox items
  @Input() items: CheckboxItem[] = [];

  // Optional legend for the fieldset.
  @Input() legend?: string;

  @Input() isVertical? = false;

  @Input() isLarge? = false;
}
