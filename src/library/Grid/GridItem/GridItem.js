/* @flow */
import React from 'react';
import { createStyledComponent, getResponsiveStyles } from '../../styles/index';
import { FlexItem } from '../../Flex/index';
import type { Values } from '../../Flex/Flex/Flex';

type Props = {
  /** Number of columns spanned [[Responsive-capable]](#responsive) */
  span?: number | Array<number | null>,
  /**
   * Media query (min-width) breakpoints along which to apply props marked
   * "&#xfeff;[[Responsive-capable]](#responsive)&#xfeff;"
   */
  breakpoints?: Array<number | string>,
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
  children: React$Node
};

const getFlexGrow = (value: number): number => (value ? 0 : 1);
const getWidth = (
  value: number,
  columns: number,
  gutter: number | string
): number | string =>
  value ? `calc(${value / columns * 100}% - ${gutter})` : 0;

/*
 * [1] IE11 doesn't use the correct box-sizing model with the flex-basis
 *     property. The workaround is to set flex-basis to 'auto' and use 'width'
 *     instead.
 */
const styles = {
  root: ({ breakpoints, columns, gutterWidth, span, theme }) => {
    const gutter =
      typeof gutterWidth === 'number'
        ? `${gutterWidth}px`
        : theme[`space_inline_${gutterWidth}`] || gutterWidth;

    const mapValueToProperty = (
      property: string,
      value: Values
    ): number | string => {
      const map = {
        flexGrow: getFlexGrow,
        width: (value) => getWidth(value, columns, gutter)
      };

      return map[property](value);
    };

    return {
      flexBasis: 'auto', // [1]

      ...getResponsiveStyles({
        breakpoints,
        mapValueToProperty,
        styles: {
          flexGrow: span,
          width: span // [1]
        },
        theme
      })
    };
  }
};

const Root = createStyledComponent(FlexItem, styles.root, {
  displayName: 'GridItem',
  filterProps: ['alignSelf', 'grow', 'inline', 'width']
}).withProps({ shrink: 0 });

/**
 * GridItem is used within [Grid](/components/grid) to lay out other components
 * in your app.
 */
export default function GridItem(props: Props) {
  return <Root {...props} />;
}
