import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
    title: 'Button',  // its the text which you see in left side pannel of storybook
    component: Button,
    decorators: [story => <center>{story()}</center>]
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>


const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'Primary',
    children: 'Primary'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    children: 'Long Primary Args'
}

export const SecondaryB = Template.bind({})
SecondaryB.args = {
    variant: 'secondary',
    children: 'Secondary'
}

//Args mechanism is more relavant because we are wirtting here dffrent states of a story.
//more more complex jsx args comes handy
//we can include different story arg in another through spread operator and make a new story
//args could be difined at the component level. and could be applied to all the stories