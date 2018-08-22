/* @flow */
import React from 'react';
import { createStyledComponent, getResponsiveStyles } from '../../styles/index';
import Box from '../../Box/index';

type Props = {
  /** Align item along the cross axis [[Responsive-capable]](#responsive) */
  alignSelf?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | Array<'start' | 'end' | 'center' | 'stretch' | null>,
  /**
   * Media query (min-width) breakpoints along which to apply props marked
   * "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;"
   */
  breakpoints?: Array<number | string>,
  /**
   * Grow factor along the main axis ([see example](#grow))
   * [[Responsive-capable]](#responsive)
   */
  grow?: number | Array<number | null>,
  /**
   * Shrink factor along the main axis ([see example](#shrink))
   * [[Responsive-capable]](#responsive)
   */
  shrink?: number | Array<number | null>,
  /** Rendered root HTML element */
  element?: string,
  /** Sets the box height. [[Responsive-capable]](#responsive) */
  height?: number | string | Array<number | string | null>,
  /** Renders Box as an inline-block [[Responsive-capable]](#responsive) */
  inline?: boolean | Array<boolean | null>,
  /** Applies a margin on all sides [[Responsive-capable]](#responsive) */
  margin?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /** Applies a bottom margin [[Responsive-capable]](#responsive) */
  marginBottom?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /**
   * Applies a right margin when the language is left-to-right and left margin
   * [for RTL languages](#rtl) [[Responsive-capable]](#responsive)
   */
  marginEnd?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /** Applies left & right margins [[Responsive-capable]](#responsive) */
  marginHorizontal?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /** Applies a left margin [[Responsive-capable]](#responsive) */
  marginLeft?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /** Applies a right margin [[Responsive-capable]](#responsive) */
  marginRight?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /**
   * Applies a left margin when the language is left-to-right and right margin
   * [for RTL languages](#rtl) [[Responsive-capable]](#responsive)
   */
  marginStart?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /** Applies a top margin [[Responsive-capable]](#responsive) */
  marginTop?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /**
   * Applies top & bottom margins [[Responsive-capable]](#responsive)
   */
  marginVertical?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /** Applies padding to all sides [[Responsive-capable]](#responsive) */
  padding?:
    | 'sm'
    | 'md'
    | 'lg'
    | number
    | string
    | Array<'sm' | 'md' | 'lg' | number | string | null>,
  /** Applies bottom padding [[Responsive-capable]](#responsive) */
  paddingBottom?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /**
   * Applies right padding when the language is left-to-right and left padding
   * [for RTL languages](#rtl) [[Responsive-capable]](#responsive)
   */
  padddingEnd?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /** Applies left & right padding [[Responsive-capable]](#responsive) */
  paddingHorizontal?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /** Applies left padding [[Responsive-capable]](#responsive) */
  paddingLeft?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /** Applies right padding [[Responsive-capable]](#responsive) */
  paddingRight?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /**
   * Applies left padding when the language is left-to-right and right padding
   * [for RTL languages](#rtl) [[Responsive-capable]](#responsive)
   */
  padddingStart?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /** Applies bottom padding [[Responsive-capable]](#responsive) */
  paddingTop?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /** Applies top & bottom margins [[Responsive-capable]](#responsive) */
  paddingVertical?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | number
    | string
    | Array<
      | 'xxs'
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | 'xxl'
      | number
      | string
      | null
    >,
  /** Sets the box width [[Responsive-capable]](#responsive) */
  width?: number | string | Array<number | string | null>,
  children: React$Node
};

type Values = boolean | null | number | string;

const mapValueToProperty = (
  property: string,
  value: Values
): number | string => {
  const map = {
    alignSelf: (value) =>
      value === 'start' || value === 'end' ? `flex-${value}` : value,
    flexBasis: (value) =>
      typeof value === 'number' && value < 1 ? `${value * 100}%` : value,
    flexGrow: (value) => value,
    flexShrink: (value) => value
  };

  return map[property](value);
};

const styles = {
  root: ({ alignSelf, breakpoints, grow, shrink, theme, width }) => ({
    ...getResponsiveStyles({
      breakpoints,
      mapValueToProperty,
      styles: {
        alignSelf,
        flexBasis: width || 'auto',
        flexGrow: grow,
        flexShrink: shrink
      },
      theme
    })
  })
};

const Root = createStyledComponent(Box, styles.root, {
  displayName: 'FlexItem',
  filterProps: ['inline', 'width']
});

/**
 * FlexItem is used within [Flex](/components/flex) to lay out other components in
 * your app.
 */
const FlexItem = (props: Props) => <Root {...props} />;

FlexItem.defaultProps = {
  grow: 0,
  shrink: 1
};

export default FlexItem;
