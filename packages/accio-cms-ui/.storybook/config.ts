import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/app.stories')
}

configure(loadStories, module)
