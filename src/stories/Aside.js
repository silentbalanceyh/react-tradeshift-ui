import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { text, boolean } from '@kadira/storybook-addon-knobs';
import Aside from '../components/Aside';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

const stories = storiesOf('Aside', module);

stories.addWithInfo(
	'Controlled mode',
	`In controlled mode the aside will respect the isOpen attribute at all times.
	Use the onClose callback to toggle the flag.`,
	() => (
		<Aside
			title={text('title', 'Aside demo')}
			isOpen={boolean('isOpen', false)}
			loadingMessage={text('loadingMessage', 'Loading...')}
			isLoading={boolean('isLoading', false)}
			onOpen={action('onOpen')}
			onOpened={action('onOpened')}
			onClose={action('onClose')}
			onClosed={action('onClosed')}
		>
			<Menu>
				<MenuItem>
					Menu item
				</MenuItem>
			</Menu>
		</Aside>
	),
	{ inline: true }
);
