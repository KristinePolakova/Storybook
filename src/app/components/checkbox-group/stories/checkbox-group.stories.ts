// export const Large: Story = {
//   args: {
//     items: [
//       {
//         label: 'Option 1',
//         checked: false,
//         isLarge: true,
//       },
//       {
//         label: 'Option 2',
//         checked: false,
//         isLarge: true,
//       },
//       {
//         label: 'Option 3',
//         checked: false,
//         isLarge: true,
//       },
//     ],

//     variant: 'large',
//   },
// };

// export const WithLegend: Story = {
//   args: {
//     items: [{
//       "label": "Option 1",
//       "checked": false
//     }, {
//       "label": "Option 2",
//       "checked": true
//     }, {
//       "label": "Option 3",
//       "checked": false
//     }],

//     legend: "Legend",
//     variant: "normal"
//   }
// };

// export const Vertical: Story = {
//   args: {
//     items: [{
//       "label": "Option 1",
//       "checked": false
//     }, {
//       "label": "Option 2",
//       "checked": true
//     }, {
//       "label": "Option 3",
//       "checked": false
//     }],

//     direction: "vertical"
//   }
// };
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxGroupComponent } from '../checkbox-group.component';

const meta: Meta<CheckboxGroupComponent> = {
  title: 'Components/Checkbox Group',
  component: CheckboxGroupComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CheckboxGroupComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<CheckboxGroupComponent>;

export const Horizontal: Story = {
  args: {
    legend: 'Horizontal Checkbox Group',
    isVertical: false,
    items: [
      { label: 'Option 1', checked: false },
      { label: 'Option 2', checked: true },
      { label: 'Option 3', checked: false },
      { label: 'Option 4', checked: false },
    ],
  },
};

export const Vertical: Story = {
  args: {
    legend: 'Vertical Checkbox Group',
    isVertical: true,
    items: [
      { label: 'Option A', checked: true },
      { label: 'Option B', checked: false },
      { label: 'Option C', checked: false },
    ],
  },
};

export const Large: Story = {
  args: {
    legend: 'Large Checkbox Group',
    isVertical: true,
    isLarge: true,
    items: [
      { label: 'Large Option 1', checked: false },
      { label: 'Large Option 2', checked: true },
      { label: 'Large Option 3', checked: false },
    ],
  },
};

export const LargeInvalid: Story = {
  args: {
    legend: 'Vertical Checkbox Group',
    isVertical: true,
    isLarge: true,

    items: [
      { label: 'Option A', checked: true, isInvalid: true },
      { label: 'Option B', checked: false, isInvalid: true },
      { label: 'Option C', checked: false, isInvalid: true },
    ],
  },
};
