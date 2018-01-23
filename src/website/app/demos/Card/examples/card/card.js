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
import Card, { CardBlock, CardImage, CardTitle } from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'basic',
  title: 'Basic Usage',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `Card content should be neither too simple nor too complex. Cards
are used as a gateway to more detailed content, not merely as a widget container.
Cards can contain any children, but are best used with
[CardActions](../card-actions), [CardBlock](../card-block),
[CardDivider](../card-divider), [CardFooter](../card-footer),
[CardImage](../card-image), and [CardTitle](../card-title).`,
  scope: {
    Button,
    Card,
    CardBlock,
    CardImage,
    CardTitle,
    loremIpsum,
    DemoLayout
  },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardImage src="/images/500x500.png" alt="gradient placeholder" />
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    </DemoLayout>`
};
