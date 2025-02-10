// checkbox-group.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxGroupComponent } from '../checkbox-group.component';
import {
  checkboxGroupArgTypes,
  defaultCheckboxItems,
} from './checkbox-group.args';

const meta: Meta<CheckboxGroupComponent> = {
  title: 'Components/Checkbox Group',
  component: CheckboxGroupComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CheckboxGroupComponent],
    }),
  ],
  argTypes: checkboxGroupArgTypes,
};

export default meta;
type Story = StoryObj<CheckboxGroupComponent>;

export const Horizontal: Story = {
  args: {
    legend: 'Horizontal Checkbox Group',
    isVertical: false,
    items: defaultCheckboxItems,
  },
};

export const Vertical: Story = {
  args: {
    legend: 'Vertical Checkbox Group',
    isVertical: true,
    items: defaultCheckboxItems,
  },
};

export const Large: Story = {
  args: {
    legend: 'Large Checkbox Group',
    isVertical: true,
    isLarge: true,
    items: defaultCheckboxItems,
  },
};

export const largeInvalid: Story = {
  args: {
    legend: 'All Invalid Checkbox Group',
    isVertical: false,
    isLarge: true,
    items: defaultCheckboxItems.map((item) => ({
      ...item,
      isInvalid: true,
    })),
  },
};
