// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from "@storybook/react";

import AddBranch from "./AddBranch";

const meta: Meta<typeof AddBranch> = {
  component: AddBranch,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AddBranch>;

export const Primary: Story = {};
