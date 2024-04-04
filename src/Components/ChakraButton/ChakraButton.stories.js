import React from 'react';
import Button from './Button';
import Center from '../Center/Center';

export default {
    title: 'Form/Button',
    component: Button,
    decorators: (story => <Center>{story()}</Center>)
}

export const Primary = () => <Button variant='primary'> Primary </Button> 
export const Secondary = () =>  <Button variant='secondary'> Secondary </Button> 
export const Success = () =>  <Button variant='success'> Success </Button> 
export const Danger = () =>  <Button variant='danger'> Danger </Button>

// Just another way of writing the above code (stories). this way is more concise and reusable.

const Template = args => <Button {...args} />
export const PrimaryA = Template.bind({});
PrimaryA.args = {
 variant: 'primary',
 children: 'Primary Argument'
}

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
    ...PrimaryA.args,
    children: 'Long Primary Ags'
}

export const SecondaryA = Template.bind({});
SecondaryA.args = {
    variant: 'secondary',
    children: 'Secondary Argument'
}

//In this way you can extend the story from other props.