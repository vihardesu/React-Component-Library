const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const react_raster_breakpoints = [320, 375, 425, 768, 1024, 2560]

export const breakpoints = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

export default breakpoints;

//Usage - Styled Component
// const StyledMain = styled.main`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: center;
//   align-items: center;
//   background: white;
//   @media ${breakpoint.laptop} { 
//     background: blue;
//   }
//   @media ${breakpoint.tablet} {
//     background: green;
//   }
// `

