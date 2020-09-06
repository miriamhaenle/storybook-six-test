import { Logo } from './4-Logo.stories'
import { Navigation } from './2-Navigation.stories'

export default {
  title: 'components/Header',
  component: Header,
  children: { control: 'text' },
}

const Template = (children) => {
  const header = document.createElement('section')
  header.classList.add('sidebar')

  return header
}
export const Header = Template.bind({})
