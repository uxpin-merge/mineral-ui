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
import { mineralTheme } from '../../../../../../themes';
import Button from '../../../../../../Button';
import Card, { CardBlock, CardActions } from '../../../../../../Card';
import IconCloud from 'mineral-ui-icons/IconCloud';
import DemoLayout from '../../components/DemoLayout';
import demoContent from '../../components/demoContent';

export default {
  id: 'with-icon-buttons',
  title: 'With Icon-only Buttons',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: '',
  scope: {
    Button,
    Card,
    CardActions,
    CardBlock,
    demoContent,
    DemoLayout,
    IconCloud
  },
  source: `
    <DemoLayout>
      <Card>
        <CardBlock>{demoContent}</CardBlock>
        <CardActions>
          <Button iconStart={<IconCloud title="Button label 1"/>} minimal />
          <Button iconStart={<IconCloud title="Button label 2"/>} minimal />
        </CardActions>
      </Card>
    </DemoLayout>`
};
