import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { boolean } from '@kadira/storybook-addon-knobs';
import { TopBars } from '../components';

const stories = storiesOf('TopBars', module);

stories.addWithInfo('Controlled mode', () => <TopBars isOpen={boolean('isOpen', false)} />, {
	inline: true
});
