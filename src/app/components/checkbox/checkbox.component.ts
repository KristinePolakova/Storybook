import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Checkboxes can be used as a individual component or with multiple in a group
 * You can use 'labelHidden' boolean which makes label invisible, but remains accessible by screenreaders.
 * Take a look at the <a href="/docs/forms/components-checkbox-group--docs">Checkbox groups</a> we support.
 *
 */

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  /** Sets the name attribute for each checkbox*/
  @Input() label!: string;

  /** Toggle switch for checkbox*/
  @Input() checked: boolean = false;

  /** Sets invalid state*/
  @Input() isInvalid?: boolean = false;

  /** Hides the title and sub text*/
  @Input() isLabelHidden?: boolean = false;

  /** Determines if checkbox should ne rendered as the large variant*/
  @Input() isLarge?: boolean = false;

  /** Subtext below the label of checkbox*/
  @Input() subtitle?: string;

  /** @internal*/
  toggleCheck(): void {
    this.checked = !this.checked;
  }
}
