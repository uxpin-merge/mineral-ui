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
import { mineralTheme, ThemeProvider } from '../../../../../../themes';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Button from '../../../../../../Button';
import Card, { CardActions, CardBlock } from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';
import demoContent from '../../components/demoContentRtl';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `CardActions reverses its alignment when the \`direction\` theme
variable is set to \`rtl\` (right-to-left).`,
  scope: {
    Button,
    Card,
    CardActions,
    CardBlock,
    demoContent,
    DemoLayout,
    IconCloud,
    ThemeProvider
  },
  source: `
    <DemoLayout dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Card>
          <CardBlock>{demoContent}</CardBlock>
          <CardActions>
            <Button size="medium">زر واحد</Button>
            <Button iconStart={<IconCloud />} size="medium">زر اثنين</Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </DemoLayout>`
};
