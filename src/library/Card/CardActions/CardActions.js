/* @flow */
import React, { Children, cloneElement } from 'react';
import { createStyledComponent, getNormalizedValue } from '../../styles/index';
import Button from '../../Button/index';
import { componentTheme as cardComponentTheme } from '../Card/Card';
import { componentTheme as cardBlockComponentTheme } from '../CardBlock/CardBlock';
import CardRow from '../CardRow';

type Props = {
  /** Actions associated with Card; see [Button](/components/button), [Link](/components/link) */
  children: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  CardActionsAction_spaceInline: baseTheme.space_inline_sm,

  ...baseTheme
});

const styles = {
  action: (props) => {
    const theme = {
      ...componentTheme(props.theme),
      ...cardBlockComponentTheme(props.theme)
    };
    const rtl = theme.direction === 'rtl';
    const fontSize = theme.CardBlock_fontSize;
    const actionsGap = getNormalizedValue(
      theme.CardActionsAction_spaceInline,
      fontSize
    );

    return {
      alignItems: 'center',
      display: 'flex',
      flex: '0 0 auto',
      fontSize,
      marginBottom: actionsGap,
      marginLeft: rtl ? null : actionsGap,
      marginRight: rtl ? actionsGap : null
    };
  },
  root: (props) => {
    const theme = {
      ...componentTheme(props.theme),
      ...cardComponentTheme(props.theme)
    };

    return {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      // We subtract `theme.CardActionsAction_spaceInline` because of the marginBottom on Action.
      marginBottom: `${parseFloat(theme.CardRow_marginVertical) -
        parseFloat(theme.CardActionsAction_spaceInline)}em`
    };
  }
};

const Root = createStyledComponent(CardRow, styles.root, {
  displayName: 'CardActions'
});
const Action = createStyledComponent('span', styles.action);

/**
 * The CardActions component allows you to lay out actions inside your [Card](/components/card).
 */
export default function CardActions(props: Props) {
  const { children, ...restProps } = props;
  const actions = Children.map(children, (child, index) => {
    if (child.type === Button) {
      child = cloneElement(child, { size: 'medium' });
    }
    return <Action key={index}>{child}</Action>;
  });

  return <Root {...restProps}>{actions}</Root>;
}
