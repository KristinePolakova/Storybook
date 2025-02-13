import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from '../checkbox.component';

// Declares a constant variable named meta with the type Meta<CheckboxComponent>.
// This object defines metadata for the CheckboxComponent story. It tells Storybook how to display and configure the component within its UI.
const meta: Meta<CheckboxComponent> = {
  // Sets the title (or path) of the story in the Storybook sidebar.
  // In this case Checkbox will be in Forms folder.
  title: 'Components/Forms/Checkbox',

  // Storybook uses this reference to render the component and to extract information such as input (props) definitions for controls and autodocs.
  component: CheckboxComponent,

  // The 'autodocs' tag informs Storybook to automatically generate documentation (docs) for this component.
  tags: ['autodocs'],

  // Defines an array of decorators that wrap your story.
  // Decorators allow you to modify or provide additional context (such as module configuration) for your story.
  decorators: [
    // In this case, it declares that the CheckboxComponent should be imported into the storys module context.
    // This is particularly useful for standalone components or when you need to provide extra declarations, imports, or providers.
    moduleMetadata({
      imports: [CheckboxComponent],
    }),
  ],
};

// const meta: Meta<CheckboxComponent> = {
//   title: 'Components/Forms/Checkbox',
//   component: CheckboxComponent,
//   tags: ['autodocs'],
//   decorators: [
//     moduleMetadata({
//       imports: [CheckboxComponent],
//     }),
//   ],
// };

// Exports the meta object as the default export of the file.
// Storybook uses the default export to read the metadata for this set of stories.
export default meta;

// Creates a type alias Story
// This alias makes it easier to define stories with the correct type.
// It tells TypeScript that each story object should follow the structure defined by StoryObj for the CheckboxComponent.
type Story = StoryObj<CheckboxComponent>;

// Defines a named export Default that represents one story (or variation) of the CheckboxComponent.
// Each export (like Default) becomes a selectable story in the Storybook UI.
export const Default: Story = {
  // Provides an args object that specifies the initial input values (or props) for the component when rendered in this story.
  // When the story is rendered, the CheckboxComponent will have its label input set to 'Default Checkbox'.
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
