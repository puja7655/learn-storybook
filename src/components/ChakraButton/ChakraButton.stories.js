import React from "react";
import { Button } from '@chakra-ui/react'

export default {
    title: 'Chakra/Button',
    component: Button,
    argTypes: { onClick: { action: 'clicked' } }
}

const Template = args => <Button {...args}></Button>
export const success = Template.bind({})
success.args = {
    variantColor: "green",
    children: 'Success'
}

export const danger = Template.bind({})
danger.args = {
    variantColor: 'Red',
    children: 'Danger'
}