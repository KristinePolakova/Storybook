import type { CheckboxItem } from '../checkbox-group.component';
import type { ArgTypes } from '@storybook/angular';

export interface CheckboxGroupArgs {
  legend?: string;
  items: CheckboxItem[];
  isVertical: boolean;
  isLarge?: boolean;
}

/**
 * Default checkbox items that can be reused in stories.
 */
export const defaultCheckboxItems: CheckboxItem[] = [
  { label: 'Option 1', checked: false },
  { label: 'Option 2', checked: true },
  { label: 'Option 3', checked: false },
];

/**
 * ArgTypes for Storybook controls and documentation.
 */
export const checkboxGroupArgTypes: ArgTypes<CheckboxGroupArgs> = {
  legend: {
    control: 'text',
    description: 'Optional legend for the checkbox group fieldset.',
  },
  items: {
    control: 'object',
    description:
      'Array of checkbox items. Each item should have a label (string), checked (boolean), and optionally isInvalid, isLabelHidden, and isLarge.',
  },
  isVertical: {
    control: 'boolean',
    description:
      'Determines if the checkbox group is displayed vertically (true) or horizontally (false).',
    if: { arg: 'isLarge', truthy: false },
  },
  isLarge: {
    control: 'boolean',
    description:
      'If set to true, all checkboxes in the group will use the large variant and the layout will always be vertical.',
  },
};
