export default {
  title: 'components/Navigation',
  argTypes: {
    children: { control: 'text' },
  },
}

const Template = ({ children }) => {
  const navContainer = document.createElement('section')
  navContainer.classList.add('sidebar')
  const nav = document.createElement('nav')
  nav.innerHTML = children
  navContainer.appendChild(nav)
  return navContainer
}

export const NavigationHomeActive = Template.bind({})
NavigationHomeActive.args = {
  children: `<a href="" class="nav-item active">Home</a>
  <a href="" class="nav-item">About</a>
  <a href="" class="nav-item ">Portfolio</a>
  <a href="" class="nav-item">Contact</a>`,
}

export const NavigationAboutActive = Template.bind({})
NavigationAboutActive.args = {
  children: `<a href="" class="nav-item ">Home</a>
  <a href="" class="nav-item active">About</a>
  <a href="" class="nav-item ">Portfolio</a>
  <a href="" class="nav-item">Contact</a>`,
}

export const NavigationPortfolioActive = Template.bind({})
NavigationPortfolioActive.args = {
  children: `<a href="" class="nav-item ">Home</a>
  <a href="" class="nav-item ">About</a>
  <a href="" class="nav-item active ">Portfolio</a>
  <a href="" class="nav-item">Contact</a>`,
}

export const NavigationContactActive = Template.bind({})
NavigationContactActive.args = {
  children: `<a href="" class="nav-item ">Home</a>
  <a href="" class="nav-item ">About</a>
  <a href="" class="nav-item ">Portfolio</a>
  <a href="" class="nav-item active">Contact</a>`,
}
