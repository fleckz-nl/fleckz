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

import ChooseSoftSkills from "./ChooseSoftSkills";

const meta: Meta<typeof ChooseSoftSkills> = {
  component: ChooseSoftSkills,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ChooseSoftSkills>;

export const Primary: Story = {};
