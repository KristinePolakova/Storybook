import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Checkboxes can be used as a individual component or with multiple in a group
 * You can use 'labelHidden' boolean which makes label invisible, but remains accessible by screenreaders.
 * Take a look at the <a href="/docs/components-checkbox-group--docs">Checkbox groups</a> we support.
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
  @Input() label: string = 'Checkbox';
  @Input() checked: boolean = false;
  @Input() isInvalid?: boolean = false;
  @Input() isLabelHidden?: boolean = false;
  @Input() isLarge?: boolean = false;

  toggleCheck(): void {
    this.checked = !this.checked;
  }
}
