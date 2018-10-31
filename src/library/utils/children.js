/* @flow */
import { Children } from 'react';
import { toArray } from './collections';

export function findByType(children: React$Node, type: React$ComponentType<*>) {
  let match;

  Children.forEach(children, (child) => {
    if (!match && child && getType(child) === type) {
      match = child;
    }
  });

  return match;
}

export function findAllByType(
  children: React$Node,
  type: React$ComponentType<*>
) {
  return Children.map(children, (child) => {
    if (child && getType(child) === type) {
      return child;
    }
  });
}

export function excludeByType(
  children: React$Node,
  type: React$ComponentType<*> | Array<React$ComponentType<*>>
) {
  const types = toArray(type);
  return Children.map(children, (child) => {
    if (types.indexOf(getType(child)) === -1) {
      return child;
    }
  });
}

export function getType(child: React$Element<any>): React$ComponentType<*> {
  return child.type.WrappedComponent || child.type;
}
