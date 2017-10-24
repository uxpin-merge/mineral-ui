/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React, { Component } from 'react';
import Media from 'react-media';
import rgba from 'polished/lib/color/rgba';
import {
  color,
  createStyledComponent,
  createThemedComponent,
  mineralTheme,
  pxToEm
} from '../../../../utils';
import Button from '../../../../Button';
import IconChevronRight from '../../../../Icon/IconChevronRight';
import ThemeProvider from '../../../../ThemeProvider';
import Link from '../../Link';
import Logo from '../../Logo';
import Markdown from '../../Markdown';
import Canvas from './Canvas';
import Footer from './Footer';
import Header from './Header';
import Section from './Section';
import ThemePlayground from './ThemePlayground';
import triangles from './triangles';
import accessibility from './accessibility.md';
import dropInComponents from './dropInComponents.md';
import first from './first.md';
import getStarted from './getStarted.md';
import intro from './intro.md';

// Temp
import magenta from './themes/magenta';
import teal from './themes/teal';
import sky from './themes/sky';

type Props = {};

type State = {
  themeIndex: number
};

const latestPost = {
  title: 'How we built our site using our components',
  url: 'https://medium.com'
};

const playgroundThemes = [
  { name: 'Magenta', ...magenta },
  { name: 'Teal', ...teal },
  { name: 'Sky', ...sky }
];

const mineralColor = {
  orange: color.orange_50,
  orange_active: color.orange_60,
  orange_focus: color.orange_50,
  orange_hover: color.orange_40,
  yellow: color.yellow_50,
  yellow_active: color.yellow_60,
  yellow_focus: color.yellow_50,
  yellow_hover: color.yellow_40,
  slate: color.slate_60,
  slate_active: color.slate_70,
  slate_focus: color.slate_60,
  slate_hover: color.slate_50
};

const rootTheme = {
  fontFamily: null,
  fontFamily_headline: `franklin-gothic-urw, ${mineralTheme.fontFamily_system}`,

  ButtonContent_fontSize: '1.1em',

  Heading_color_3: mineralColor.orange,
  Heading_fontFamily: `franklin-gothic-urw, ${mineralTheme.fontFamily_system}`,
  Heading_fontSize_2: pxToEm(59),
  Heading_fontSize_3: pxToEm(40),
  Heading_fontWeight_1: '300',
  Heading_fontWeight_2: '300',
  Heading_fontWeight_3: '300',
  Heading_lineHeight: '1.1'
};
const heroTheme = {
  color_text: color.white,

  Button_backgroundColor_primary: mineralColor.orange,
  Button_backgroundColor_primary_active: mineralColor.orange_active,
  Button_backgroundColor_primary_focus: mineralColor.orange_focus,
  Button_backgroundColor_primary_hover: mineralColor.orange_hover,
  Button_color_text: mineralColor.orange,

  Heading_color_2: color.white,

  Link_color: color.white,
  Link_color_active: color.gray_10,
  Link_color_focus: color.white,
  Link_color_hover: color.white
};
const gettingStartedTheme = {
  color_text: color.white,

  Button_backgroundColor_primary: mineralColor.yellow,
  Button_backgroundColor_primary_active: mineralColor.yellow_active,
  Button_backgroundColor_primary_focus: mineralColor.yellow_focus,
  Button_backgroundColor_primary_hover: mineralColor.yellow_hover,

  Button_color_text: color.gray_100,
  Button_color_text_primary: color.gray_100,

  Heading_color_3: color.white,
  Heading_color_4: color.white,

  Link_color: mineralColor.yellow,
  Link_color_active: mineralColor.yellow_active,
  Link_color_focus: mineralColor.yellow_focus,
  Link_color_hover: mineralColor.yellow_hover
};
const CTALinkTheme = {
  Link_color: color.gray_80,
  Link_color_active: color.gray_90,
  Link_color_hover: color.gray_70,
  Link_color_focus: color.gray_80
};

const styles = {
  blogLink: ({ theme }) => ({
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: theme.borderRadius_1,
    padding: `${parseFloat(theme.space_inset_sm) / 2}em`,

    '&::before': {
      backgroundColor: mineralColor.yellow,
      borderRadius: theme.borderRadius_1,
      bottom: '0.1em',
      color: theme.color_black,
      content: 'New',
      fontSize: '0.8em',
      fontWeight: theme.fontWeight_bold,
      marginRight: theme.space_inline_sm,
      padding: `
      ${parseFloat(theme.space_inset_sm) / 4}em
      ${parseFloat(theme.space_inset_sm) / 2}em
      `,
      position: 'relative',
      textTransform: 'uppercase'
    },

    '&:hover::before': {
      textDecoration: 'none'
    }
  }),
  buttons: ({ theme }) => ({
    '& > * + *': {
      marginLeft: theme.space_inline_lg
    }
  }),
  coloredLogo: {
    '& .band-1': {
      fill: mineralColor.yellow
    },
    '& .band-2': {
      fill: mineralColor.orange
    },
    '& .band-3': {
      fill: mineralColor.slate
    }
  },
  features: {
    '@media(min-width: 39em)': {
      display: 'flex',
      justifyContent: 'space-between'
    }
  },
  feature: {
    '@media(min-width: 39em)': {
      width: '40%'
    }
  },
  getStarted: ({ theme }) => ({
    margin: '0 auto',
    maxWidth: 'min-content',

    '& > svg': {
      display: 'block',
      margin: '0 auto',
      width: '50px'
    },

    '& > h3': {
      textAlign: 'center'
    },

    '& > ol': {
      counterReset: 'getStarted',
      listStyle: 'none',
      padding: 0
    },

    '& > ol > li': {
      counterIncrement: 'getStarted',
      position: 'relative',

      '&::before': {
        backgroundColor: mineralColor.yellow,
        borderRadius: '0.75em',
        content: 'counter(getStarted)',
        color: theme.color_gray_100,
        fontWeight: theme.fontWeight_extraBold,
        height: '1.5em',
        right: `calc(100% + ${theme.space_inline_md})`,
        position: 'absolute',
        textAlign: 'center',
        top: '-0.2em', // Optical adjustment
        width: '1.5em'
      }
    }
  }),
  getStartedBackgrounds: ({ theme }) => ({
    '& > :nth-child(1)': {
      backgroundColor: theme.color_gray_100,
      bottom: 'auto',
      zIndex: '-2',

      '& > svg': {
        mixBlendMode: 'luminosity',
        transform: 'translateX(50%) rotate(180deg) scale(2)'
      }
    },

    '& > :nth-child(2)': {
      background: `linear-gradient(
        rgba(0,0,0,0.4),
        ${theme.color_gray_100}
      )`
    },

    '& > :nth-child(3)': {
      background: `repeating-linear-gradient(
        -45deg,
        rgba(255,255,255,0.05),
        rgba(255,255,255,0.05) 2px,
        rgba(0,0,0,0) 2px,
        rgba(0,0,0,0) 4px
      )`
    }
  }),
  getStartedSection: ({ theme }) => ({
    position: 'relative',

    '&::before': {
      backgroundColor: theme.color_gray_100,
      bottom: 0,
      content: '""',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: '-2'
    }
  }),
  guidelines: ({ theme }) => ({
    '@media(max-width: 38.999em)': {
      textAlign: 'center',

      '& > svg': {
        margin: '0 auto',
        maxWidth: '10vh',
        width: '50%'
      }
    },

    '@media(min-width: 39em)': {
      display: 'grid',
      gridTemplateColumns: '1fr 10em',
      gridColumnGap: theme.space_inline_md,

      '& > *': {
        gridColumn: 1,
        textAlign: 'right'
      },

      '& > svg': {
        alignSelf: 'center',
        gridColumn: 2,
        gridRow: '1 / span 2',
        width: '100%'
      }
    }
  }),
  hero: {
    // Inner
    '> div': {
      paddingTop: 0,

      '@media(min-width: 39em)': {
        justifyContent: 'space-between'
      }
    }
  },
  heroCanvas: {
    backgroundColor: mineralColor.slate,

    '@media(max-width: 38.999em)': {
      bottom: '-12.5em' // Matches change in Header margin due to open menu
    },

    '& > svg': {
      mixBlendMode: 'hard-light'
    }
  },
  intro: {
    // Dependent on h2 content
    '& > h2': {
      '@media(max-width: 29.999em)': {
        fontSize: pxToEm(44)
      }
    },

    // All of these numbers are dependent on width of h2 content
    '& > p': {
      '@media(min-width: 52em)': {
        maxWidth: '36em'
      },

      '@media(min-width: 62em)': {
        maxWidth: '41em'
      }
    }
  },
  playgroundCanvas: ({ index }) => ({
    background: `linear-gradient(
      ${rgba(playgroundThemes[index].color_theme_80, 0.5)},
      ${rgba(playgroundThemes[index].color_theme_40, 0.5)}
    )`,
    transform: 'scaleX(-1)',

    '& > svg': {
      mixBlendMode: 'hard-light',
      transform: 'scale(2)'
    }
  }),
  playgroundSection: ({ index }) => ({
    position: 'relative',

    '&::before': {
      background: `linear-gradient(
        ${playgroundThemes[index].color_theme_80},
        rgba(0,0,0,0)
      )`,
      bottom: 0,
      content: '""',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0
    }
  })
};

const Root = createStyledComponent(
  'div',
  {},
  {
    includeStyleReset: true
  }
);
const BlogLink = createStyledComponent(Link, styles.blogLink);
const Buttons = createStyledComponent('div', styles.buttons);
const ColoredLogo = createStyledComponent(Logo, styles.coloredLogo);
const CTALink = createThemedComponent(Link, CTALinkTheme);
const Features = createStyledComponent('div', styles.features);
const Feature = createStyledComponent(Markdown, styles.feature).withProps({
  anchors: false
});
const GetStarted = createStyledComponent(
  Markdown,
  styles.getStarted
).withProps({ anchors: false });
const GetStartedBackgrounds = createStyledComponent(
  'div',
  styles.getStartedBackgrounds
);
const GetStartedSection = createStyledComponent(
  Section,
  styles.getStartedSection
);
const Guidelines = createStyledComponent(
  Markdown,
  styles.guidelines
).withProps({ anchors: false });
const Hero = createStyledComponent(Section, styles.hero);
const HeroCanvas = createStyledComponent(Canvas, styles.heroCanvas);
const Intro = createStyledComponent(Markdown, styles.intro).withProps({
  anchors: false
});
const PlaygroundCanvas = createStyledComponent(Canvas, styles.playgroundCanvas);
const PlaygroundSection = createStyledComponent(
  Section,
  styles.playgroundSection
);

const GetStartedBackground = () => (
  <GetStartedBackgrounds>
    <Canvas />
    <Canvas triangles={false} />
    <Canvas triangles={false} />
  </GetStartedBackgrounds>
);

export default class Home extends Component<Props, State> {
  props: Props;

  state: State;

  changeTheme: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      themeIndex: 0
    };
  }

  componentDidMount() {
    triangles();
    this.rotateThemes(this.state.themeIndex);
  }

  render() {
    const { themeIndex } = this.state;

    return (
      <Media query="(min-width: 39em)">
        {matches => (
          <ThemeProvider theme={rootTheme}>
            <Root>
              <ThemeProvider theme={heroTheme}>
                <Hero angles={[5, 3]} point={matches ? 1 / 4 : 1 / 1000}>
                  <HeroCanvas />
                  <Header latestPost={latestPost} />
                  {latestPost &&
                    matches && (
                      <BlogLink to={latestPost.url}>
                        {latestPost.title}
                        <IconChevronRight size="large" />
                      </BlogLink>
                    )}
                  <Intro>{intro}</Intro>
                  <Buttons>
                    <Button primary size="jumbo">
                      Get Started
                    </Button>
                    <Media
                      query="(min-width: 39em)"
                      render={() => (
                        <Button size="jumbo">View on GitHub</Button>
                      )}
                    />
                  </Buttons>
                </Hero>
              </ThemeProvider>
              <Section
                angles={[3, 5]}
                // $FlowFixMe
                clipColor={playgroundThemes[themeIndex].color_theme_80}
                point={matches ? 3 / 4 : 999 / 1000}>
                <Guidelines scope={{ ColoredLogo, IconChevronRight, CTALink }}>
                  {first}
                </Guidelines>
              </Section>
              <PlaygroundSection
                angles={[5, 3]}
                index={themeIndex}
                point={matches ? 1 / 4 : 1 / 1000}>
                <PlaygroundCanvas index={themeIndex} />
                <ThemePlayground
                  index={themeIndex}
                  setIndex={index => {
                    this.setThemeIndex(index, true);
                  }}
                  themes={playgroundThemes}
                />
              </PlaygroundSection>
              <Section>
                <Features>
                  <Feature>{accessibility}</Feature>
                  <Feature>{dropInComponents}</Feature>
                </Features>
              </Section>
              <GetStartedSection
                angles={[-5, -5]}
                clipColor={color.white}
                point={1 / 2}>
                <GetStartedBackground index={themeIndex} />
                <ThemeProvider theme={gettingStartedTheme}>
                  <GetStarted scope={{ Buttons, Button, Logo }}>
                    {getStarted}
                  </GetStarted>
                </ThemeProvider>
              </GetStartedSection>
              <ThemeProvider theme={gettingStartedTheme}>
                <Footer />
              </ThemeProvider>
            </Root>
          </ThemeProvider>
        )}
      </Media>
    );
  }

  rotateThemes = (index: number, isClick?: boolean) => {
    if (isClick) {
      clearTimeout(this.changeTheme);
    }
    const newIndex = index < playgroundThemes.length - 1 ? index + 1 : 0;
    this.changeTheme = setTimeout(() => {
      this.setThemeIndex(newIndex);
    }, 12000);
  };

  setThemeIndex = (index: number, isClick?: boolean) => {
    this.setState({ themeIndex: index }, () => {
      this.rotateThemes(index, isClick);
    });
  };
}
