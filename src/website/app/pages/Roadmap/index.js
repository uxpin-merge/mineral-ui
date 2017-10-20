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
/* eslint-disable */
import React from 'react';
import { createStyledComponent } from '../../../../utils';
import GuidelinePage from '../../GuidelinePage';
import Markdown from '../../Markdown';
import Heading from '../../Heading';
import content from './content.md';

const todo = 'todo',
      doing = 'doing',
      done = 'done';

const data = [{
  title: `Publish CA's Design System`,
  bullets: [{
    title: 'Write guideline pages that explain the different parts of our system',
    status: done
  }, {
    title: 'Crystalize a home page that delights and excites potential users',
    status: doing
  }, {
    title: 'Devise community pages that engage contributors',
    status: todo
  }]
}, {
  title: `Build Components`,
  bullets: [{
    title: 'Publish a proof of concept that we can use to validate our architecture',
    status: done
  }, {
    title: 'Assemble a set of base components that could be used to stand up a simple app',
    status: doing
  }, {
    title: 'Forge some higher-level components that stitch several of our base components together',
    status: todo
  }, {
    title: 'Synthesize a stylistically robust DataTable that is performant under load',
    status: todo
  }]
}, {
  title: `Adoption Across CA's Products`,
  bullets: [{
    title: 'Fully Support CA API Management UI',
    status: doing
  }, {
    title: 'Identify our next early adoptor product',
    status: todo
  }]
}];

type Status = todo | doing | done;

type Bullet = {
  title: string,
  status?: Status
};

type Bullets = Array<Bullet>;

type Header = {
  title: string,
  bullets: Bullets
};

type Headers = Array<Header>;

export default function Roadmap() {
  return (
    <GuidelinePage>
      <Markdown scope={{ Anchor }}>{content}</Markdown>
      { renderHeaders(data) }
    </GuidelinePage>
  );
}

const styles = {
  anchor: ({ theme }) => ({
    color: 'black'
  }),
  li: ({ theme }) => ({
    marginBottom: theme.space_stack_sm
  }),
  badge: ({ status, theme }) => ({
    backgroundColor:
      done === status && theme.backgroundColor_success_activeMuted ||
      doing === status && theme.color_theme_20,
    marginLeft: theme.space_inline_sm,
    padding: `0 ${theme.space_inline_sm}`,
    borderRadius: theme.borderRadius_1,
    fontWeight: theme.fontWeight_bold,
    textDecoration: 'none',
    color: theme.color_text,
    fontSize: theme.fontSize_ui,
    textTransform: 'uppercase'
  })
};

const UL = createStyledComponent('ul');
const LI = createStyledComponent('li', styles.li);
const Badge = createStyledComponent('span', styles.badge);
const Anchor = createStyledComponent('a', styles.anchor);

function renderHeaders(data: Headers) {
  return data.map((header, idx) => renderHeader(header));
}

function renderHeader({title, bullets}: Header) {
  return [
    <Heading level={3} key={0}>{title}</Heading>,
    renderItems(bullets)
  ];
}

function renderItems(bullets: Bullets) {
  return (
    <UL>
      { bullets.map((bullet, idx) => <Bullet key={idx} {...bullet} />) }
    </UL>
  );
}

function Bullet({ title, status }: Bullet) {
  return (
    <LI>
      { title }
      { renderStatus(status) }
    </LI>
  );
}

function renderStatus(status: Status) {
  return ([undefined, todo].indexOf(status) === -1) ? (
    <Badge status={status}>
      {status === doing ? 'in-progress' : status}
    </Badge>
  ) : null;
}
