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
import React, { Children, cloneElement } from 'react';
import { createStyledComponent, getNormalizedValue } from '../styles';
import Button from '../Button';
import { componentTheme as cardComponentTheme } from './Card';
import { componentTheme as cardBlockComponentTheme } from './CardBlock';

type Props = Object;

export const componentTheme = (baseTheme: Object) => ({
  CardActions_gap: baseTheme.space_inline_sm,

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  props => {
    const theme = {
      ...componentTheme(props.theme),
      ...cardComponentTheme(props.theme),
      ...cardBlockComponentTheme(props.theme)
    };
    const fontSize = theme.CardBlock_fontSize;
    const rtl = theme.direction === 'rtl';

    return {
      fontSize,
      marginBottom: getNormalizedValue(theme.CardRow_marginVertical, fontSize),
      marginTop: getNormalizedValue(theme.CardRow_marginVertical, fontSize),
      paddingLeft: getNormalizedValue(
        theme.CardRow_paddingHorizontal,
        fontSize
      ),
      paddingRight: getNormalizedValue(
        theme.CardRow_paddingHorizontal,
        fontSize
      ),
      textAlign: rtl ? 'left' : 'right',

      '& > *': {
        marginLeft: rtl ? null : theme.CardActions_gap,
        marginRight: rtl ? theme.CardActions_gap : null
      }
    };
  },
  {
    displayName: 'CardActions'
  }
);

const getChildren = children => {
  let endChildren = [];
  Children.map(children, (child, index) => {
    if (child.type === Button) {
      child = cloneElement(child, { key: index, size: 'medium' });
    }
    endChildren.push(child);
  });
  return endChildren;
};

/**
 * CardActions.
 */
export default function CardActions({ children, ...restProps }: Props) {
  return <Root {...restProps}>{getChildren(children)}</Root>;
}
