import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from '../checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Forms/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CheckboxComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    label: 'Default Checkbox',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
    isInvalid: false,
    isLarge: false,
    isLabelHidden: false,
  },
};

export const Invalid: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
    isInvalid: true,
  },
};

export const Large: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
    isInvalid: false,
    isLarge: true,
  },
};

export const WithSubtitle: Story = {
  args: {
    label: 'Default Checkbox',
    checked: false,
    subtitle: 'Subtitle text for default checkbox',
  },
};
