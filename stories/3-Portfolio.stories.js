export default {
  title: 'components/Portfolio',
  argTypes: {
    children: { control: 'text' },
  },
}

const Template = ({ children }) => {
  const PortfolioWrapper = document.createElement('main')
  PortfolioWrapper.classList.add('portfolio')
  PortfolioWrapper.innerHTML = children
  return PortfolioWrapper
}

export const Portfolio = Template.bind({})
Portfolio.args = {
  children: `  <div class="portfolio__item medium">One</div>
  <div class="portfolio__item large two">Two</div>
  <div class="portfolio__item medium">Three</div>
  <div class="portfolio__item small">Four</div>
  <div class="portfolio__item tall">Five</div>
  <div class="portfolio__item wide">Six</div>
  <div class="portfolio__item wide">Seven</div>
  <div class="portfolio__item medium">Eight</div>`,
}
