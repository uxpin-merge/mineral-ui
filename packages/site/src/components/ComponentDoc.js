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
import React from 'react';
import { createStyledComponent } from '@mineral-ui/component-utils';
import ComponentDocExample from './ComponentDocExample';
import Link from './Link';
import styleReset from './styleReset';
import PropTable from './PropTable';

type Example = {
  description?: string,
  scope: Object,
  source: string,
  title: string
};

type Props = {
  behavior: MnrlReactNode,
  className?: string,
  design: MnrlReactNode,
  doc: Object,
  examples?: Array<Example>,
  slug: string,
  title: string
};

const styles = {
  componentDoc: (props, theme) => ({
    ...styleReset(theme),
    borderBottom: `2px solid ${theme.color_gray}`,
    margin: `0 ${theme.measurement_d} ${theme.measurement_d}`,
    paddingBottom: theme.measurement_d
  }),
  header: (props, theme) => ({
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.measurement_b,
    padding: `${theme.measurement_c} 0`
  }),
  title: (props, theme) => ({
    fontSize: `${parseFloat(theme.fontSize_h1) / 2}em`,
    fontWeight: theme.fontWeight_extraBold,
    margin: `0 0 ${theme.measurement_c}`,
    marginRight: 'auto',
    paddingRight: '12rem'
  }),
  p: (props, theme) => ({
    fontSize: `${parseFloat(theme.fontSize_h3) / 2}em`,
    flex: '1 0 100%',
    lineHeight: '1.5',
    margin: '0'
  }),
  h2: (props, theme) => ({
    margin: `${2 *
      parseFloat(theme.measurement_d)}rem 0 ${theme.measurement_c} 0`,
    fontSize: `${parseFloat(theme.fontSize_h2) / 2}em`,
    fontWeight: theme.fontWeight_semiBold
  }),
  h3: (props, theme) => ({
    fontSize: `${parseFloat(theme.fontSize_h3) / 2}em`,
    fontWeight: theme.fontWeight_semiBold,
    margin: `${2 *
      parseFloat(theme.measurement_d)}rem 0 ${theme.measurement_b} 0`
  }),
  subnav: (props, theme) => ({
    borderBottom: `1px solid ${theme.color_gray}`,
    marginBottom: '2rem'
  }),
  navElement: {
    display: 'inline-block',
    marginRight: '1.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '3px solid transparent',
    cursor: 'pointer'
  }
};

const Root = createStyledComponent('section', styles.componentDoc);
const Header = createStyledComponent('header', styles.header);
const Title = createStyledComponent('h1', styles.title);
const P = createStyledComponent('p', styles.p);
const H2 = createStyledComponent('h2', styles.h2);
const H3 = createStyledComponent('h3', styles.h3);
const SubNav = createStyledComponent('nav', styles.subnav);
const NavElement = createStyledComponent(Link, styles.navElement);

function GithubIcon() {
  return (
    <svg
      aria-hidden="true"
      height="32"
      version="1.1"
      viewBox="0 0 16 16"
      width="32">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

export default function ComponentDoc({
  behavior,
  className,
  design,
  doc,
  examples,
  slug,
  title
}: Props) {
  const { description: descriptionDoc, props: propDoc } = doc;
  const description = typeof descriptionDoc === 'string'
    ? <P>{descriptionDoc}</P>
    : descriptionDoc;

  return (
    <Root className={className} id={slug}>
      <Header>
        <Title>{title}</Title>
        <Link
          href={`https://github.com/mineral-ui/mineral-ui/tree/master/packages/${slug}`}
          aria-label="View on GitHub">
          <GithubIcon />
        </Link>
        {description}
      </Header>
      <SubNav>
        <NavElement href="#code">Code & Examples</NavElement>
        <NavElement href="#usage">Usage Guidelines</NavElement>
      </SubNav>
      <div>
        <H2 id="code">Code & Examples</H2>
        {renderPropDoc(propDoc)}
        {renderExamples(examples, slug, propDoc)}
        <H2 id="usage">Usage Guidelines</H2>
        <p>{design}</p>
        <H3>Behavior</H3>
        <p>{behavior}</p>
      </div>
    </Root>
  );
}

function renderExamples(
  examples?: Array<Example>,
  slug: string,
  propDoc: Object
) {
  return (
    examples && [
      <H3 key={0}>{examples.length === 1 ? 'Example' : 'Examples'}</H3>,
      examples.map((example, idx) => {
        return (
          <ComponentDocExample
            key={`${slug}:${idx}`}
            {...example}
          />
        );
      })
    ]
  );
}

function renderPropDoc(propDoc: Object) {
  return (
    propDoc && [<H3 key={0}>Props</H3>, <PropTable key={1} propDoc={propDoc} />]
  );
}
