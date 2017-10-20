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

type Issue = {
  title: string,
  closed?: boolean
};

type Issues = Array<Issue>;

type Milestone = {
  title: string,
  dueDate?: date,
  issues: Issues
};

type Milestones = Array<Milestone>;

type Label = {
  title: string,
  milestones: Milestones
};

type Labels = Array<Label>

const data = [{
  title: `Publish CA's Design System`,
  milestones: [{
    title: 'past',
    issues: [{
      title: 'Color Page',
      closed: true
    }, {
      title: 'Typography Page',
      closed: true
    }, {
      title: 'Theme Page',
      closed: true
    }]
  }, {
    title: 'current',
    issues: [{
      title: 'Home Page',
      closed: false
    }]
  }, {
    title: 'next',
    issues: [{
      title: 'Community Page'
    }, {
      title: 'Resorces Page'
    }]
  }]
}, {
  title: `Build Components`,
  milestones: [{
    title: 'past',
    issues: [{
      title: 'HelloWorld',
      closed: true
    }, {
      title: 'Button',
      closed: true
    }, {
      title: 'Link',
      closed: true
    }, {
      title: 'Card',
      closed: true
    }, {
      title: 'Menu',
      closed: true
    }, {
      title: 'Dropdown',
      closed: true
    }]
  }, {
    title: 'next',
    issues: [{
      title: 'Select'
    }, {
      title: 'TextInput'
    }, {
      title: 'Form'
    }]
  }, {
    title: 'unplanned',
    issues: [{
      title: 'DataTable'
    }, {
      title: 'Nav'
    }, {
      title: 'Grid'
    }, {
      title: 'Tabs'
    }]
  }]
}, {
  title: `Adoption Across CA's Products`,
  milestones: [{
    title: 'APIM',
    issues: [{
      title: 'Consumed One Component',
      closed: true
    }, {
      title: 'Full Support',
      closed: false
    }]
  }, {
    title: 'CAAC',
    issues: [{
      title: 'Consumed One Component',
      closed: false
    }, {
      title: 'Full Support'
    }]
  }, {
    title: 'AXA',
    issues: [{
      title: 'Consumed One Component',
      closed: false
    }, {
      title: 'Full Support'
    }]
  }]
}];

export default function Roadmap() {
  return (
    <GuidelinePage>
      <Markdown>{content}</Markdown>
      <Labels labels={data} />
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
  chip: ({ closed, theme }) => ({
    backgroundColor:
      closed
        ? theme.backgroundColor_success_activeMuted
        : theme.color_theme_20,
    marginLeft: theme.space_inline_sm,
    padding: `0 ${theme.space_inline_sm}`,
    borderRadius: theme.borderRadius_1,
    fontWeight: theme.fontWeight_bold,
    textDecoration: 'none',
    color: theme.color_text,
    fontSize: theme.fontSize_ui
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

function Labels({ labels }: Labels) {
  return (
    <LabelList>
      { labels.map(label => <Label {...label}/>) }
    </LabelList>
  );
}

function Label({ milestones, title }: Label) {
  return (
    <LabelRoot>
      <Heading level={3}>{title}</Heading>
      <Milestones milestones={milestones} />
    </LabelRoot>
  );
}

function Milestones({ milestones }: Milestones) {
  return (
    <MilestoneList>
      { milestones.map(milestone => <Milestone {...milestone} />) }
    </MilestoneList>
  );
}

function Milestone({ title, issues }: Milestone) {
  return (
    <MilestoneRoot>
      {title}
      <Issues issues={issues} />
    </MilestoneRoot>
  );
}

function Issues({ issues }: Issues) {
  return (
    <IssueList>
      { issues.map(issue => <Issue {...issue} />) }
    </IssueList>
  );
}

function Issue({ title, closed }: Issue) {
  return (
    <IssueRoot>
      {title}
      {undefined === closed ? null : <Chip closed={closed} /> }
    </IssueRoot>
  );
}

function Chip({ closed }) {
  return (
    <ChipRoot closed={closed}>
      {closed ? 'DONE' : 'IN-PROGRESS'}
    </ChipRoot>
  );
}
