import React from 'react';
import Input from './input';

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input variant='small' />
export const Med = () => <Input variant='med' />
export const Large = () => <Input variant='large' />

Small.storyName = 'Small Input';
