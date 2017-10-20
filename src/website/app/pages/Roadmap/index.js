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

type Headers = Array<Header>

const data = [{
  title: `Publish CA's Design System`,
  bullets: [{
    title: 'Build guideline pages that explain the different parts of our system',
    status: done
  }, {
    title: 'Build a home page that delights and excites potential users',
    status: doing
  }, {
    title: 'Build community pages that engage contributors',
    status: todo
  }]
}, {
  title: `Build Components`,
  bullets: [{
    title: 'Publish a proof of concept that we can use to validate our architecture',
    status: done
  }, {
    title: 'Build a set of base components that could be used to stand up a simple app',
    status: doing
  }, {
    title: 'Build some higher-level components that stitch several of our base components together',
    status: todo
  }, {
    title: 'Build the best damn DataTable the world has ever seen',
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

export default function Roadmap() {
  return (
    <GuidelinePage>
      <Markdown>{content}</Markdown>
      <Headers data={data} />
    </GuidelinePage>
  );
}

const styles = {
  statusBarRoot: ({ theme }) => ({
    width: '5em',
    borderRadius: theme.borderRadius_1,
    border: `2px solid black`
  }),
  statusIndicator: ({ percent, theme }) => ({
    backgroundColor:
      percent > 70
        ? theme.backgroundColor_success_activeMuted
        : percent > 50
          ? theme.backgroundColor_warning_activeMuted
          : theme.backgroundColor_danger_activeMuted,
    borderRadius: theme.borderRadius_1,
    width: `${percent}%`,
    textAlign: 'center',
    fontWeight: theme.fontWeight_bold,
    fontSize: theme.fontSize_ui
  }),
  incrementList: () => ({
    listStyle: 'none',
    paddingLeft: '0px'
  }),
  milestonesList: () => ({
    listStyleType: 'disc'
  }),
  milestoneRoot: ({ theme }) => ({
    marginBottom: theme.space_stack_sm
  }),
  chip: ({ status, theme }) => ({
    backgroundColor:
      done === status && theme.backgroundColor_success_activeMuted ||
      doing === status && theme.color_theme_20 ||
      todo === status && theme.backgroundColor_warning_activeMuted,
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

const LabelList = createStyledComponent('ul', styles.incrementList);
const LabelRoot = createStyledComponent('li');
const MilestoneList = createStyledComponent('ul', styles.milestonesList);
const MilestoneRoot = createStyledComponent('li', styles.milestoneRoot);
const IssueList = createStyledComponent('ul');
const IssueRoot = createStyledComponent('li');
const ChipRoot = createStyledComponent('a', styles.chip);
const StatusBarRoot = createStyledComponent('div', styles.statusBarRoot);
const StatusIndicator = createStyledComponent('div', styles.statusIndicator);

function StatusBar({ percent }) {
  return (
    <StatusBarRoot>
      <StatusIndicator percent={percent}>{`${percent}%`}</StatusIndicator>
    </StatusBarRoot>
  );
}

function Headers({ data }: Headers) {
  return (
    <LabelList>
      { data.map(header => <Header {...header}/>) }
    </LabelList>
  );
}

function Header({ bullets, title }: Header) {
  return (
    <LabelRoot>
      <Heading level={3}>{title}</Heading>
      <Bullets bullets={bullets} />
    </LabelRoot>
  );
}

function Bullets({ bullets }: Bullets) {
  return (
    <MilestoneList>
      { bullets.map(bullet => <Bullet {...bullet} />) }
    </MilestoneList>
  );
}

function Bullet({ title, status }: Bullet) {
  return (
    <MilestoneRoot>
      {title}
      <Chip status={status} />
    </MilestoneRoot>
  );
}

function Chip({ status }) {
  return (undefined === status) ? null : (
    <ChipRoot status={status}>
      {status}
    </ChipRoot>
  );
}
