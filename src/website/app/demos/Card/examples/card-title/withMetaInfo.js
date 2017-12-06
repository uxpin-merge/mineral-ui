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
import Card, { CardBlock, CardTitle } from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';
import demoContent from '../../components/demoContent';

export default {
  id: 'meta',
  title: 'With Meta Information',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `When you must provide information that doesn't belong to every
Card in a set, supply it as \`meta\` information. The information will display
beside the title. If information is in every card in the set, or if the meta
information is not brief, consider using the \`subtitle\` prop.`,
  scope: { Card, CardBlock, CardTitle, demoContent, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle meta="Meta Info">Card Title</CardTitle>
        <CardBlock>{demoContent}</CardBlock>
      </Card>
      <Card>
        <CardTitle meta="Longer meta info is truncated">Card Title</CardTitle>
        <CardBlock>{demoContent}</CardBlock>
      </Card>
    </DemoLayout>`
};
