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
import Card, { CardBlock, CardFooter } from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';
import demoContent from '../../components/demoContent';

export default {
  id: 'expandable',
  title: 'Expandable Footer',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: '',
  scope: { Card, CardBlock, CardFooter, demoContent, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardBlock>{demoContent}</CardBlock>
        <CardFooter title="Collapsed by Default" expandable>
          <CardBlock>{demoContent}</CardBlock>
        </CardFooter>
      </Card>
      <Card>
        <CardBlock>{demoContent}</CardBlock>
        <CardFooter title="Expanded by Default" expandable defaultIsOpen>
          <CardBlock>{demoContent}</CardBlock>
        </CardFooter>
      </Card>
    </DemoLayout>`
};
