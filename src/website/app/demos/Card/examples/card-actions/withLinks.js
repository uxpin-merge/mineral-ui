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
import { mineralTheme } from '../../../../../../themes';
import _Link from '../../../../../../Link';
import Card, { CardBlock, CardActions } from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';
import demoContent from '../../components/demoContent';

const Link = (props: {}) => <_Link target="_blank" {...props} />;

export default {
  id: 'with-links',
  title: 'With Links',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: '',
  scope: { Link, Card, CardActions, CardBlock, demoContent, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardBlock>{demoContent}</CardBlock>
        <CardActions>
          <Link href="https://example.com">Link 1</Link>
          <Link href="https://example.com">Link 2</Link>
        </CardActions>
      </Card>
    </DemoLayout>`
};
