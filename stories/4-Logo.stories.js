export default {
  title: 'components/Logo',
  argTypes: {
    children: { control: 'text' },
  },
}

const Template = ({ children }) => {
  const logo = document.createElement('header')
  logo.innerHTML = children
  return logo
}

export const Logo = Template.bind({})
Logo.args = {
  children: `<div class="logo">miriamhaenle<span>Portfolio</span></div>
`,
}
