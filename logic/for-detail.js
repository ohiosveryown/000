const staticLogic = () => {
  // window height
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  // for resize
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
  // constance wu's
  const mq = window.matchMedia( '(min-width: 700px)' )
  const cover = document.querySelector('.cover')
  // styles
  cover.style.cssText = `
    animation: scaleLeftSm var(--animbase) forwards var(--inout);
  `
  if (mq.matches) {
    cover.style.cssText = `
      animation: scaleLeftMd var(--animbase) forwards var(--inout);
    `
  }
}


const toDetail = () => {
  // constance wu's
  const cover = document.querySelector('.cover')
  const asideContent = document.querySelector('.aside-content')
  // logic styling
  cover.style.cssText = `
    animation: detailLeave var(--animbase) forwards var(--inout);
  `
  asideContent.style.cssText = `
    animation: fadeOut 300ms forwards ease;
  `
}

const toIndex = () => {
  // constance wu's
  const firstCover = document.querySelector('.first')
  const secondCover = document.querySelector('.second')
  const thirdCover = document.querySelector('.third')
  // styles
  firstCover.style.cssText = `
    animation: scaleCoverTriRev 800ms forwards var(--inout);
  `
  secondCover.style.cssText = `
    animation: scaleCoverTriRev 800ms forwards var(--inout) 150ms;
  `
  thirdCover.style.cssText = `
    animation: scaleCoverTriRev 800ms forwards var(--inout) 300ms;
  `
}

// exports
export { staticLogic, toDetail, toIndex }