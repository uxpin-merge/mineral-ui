import React from 'react';

import Button from '../../../Button/Button';
import Link from '../../../Link/Link';
import CardActions from '../../CardActions/CardActions';
import CardBlock from '../../CardBlock/CardBlock';
import CardDivider from '../../CardDivider/CardDivider';
import Card from '../Card';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. ' +
  'Aliquam erat volutpat. Nulla facilisi.';

const handleOnClick = () => {};

export default (
  <Card key="OFOK2ZKES405DYHFSHQ28OM9WSKA8APM">
    <CardBlock key="UY8QB4P8Y2TXG5170CH1K8IXALSB8VG0">{loremIpsum}</CardBlock>
    <CardDivider key="2d9577421c3542b4b42ac0127712e117" />
    <CardActions key="77XCO8EASMVIM7H8KF7OY57YU0Q90EMH">
      <Link
        key="9XI3KDGOF0H05837DAG2M9EUUUQIMAO3"
        variant={'danger'}
        href="http://example.com">
        Read more
      </Link>
      <Button
        key="83a41d7331ef425581849864eaffb170"
        variant={'regular'}
        onClick={handleOnClick}>
        Elo 320
      </Button>
    </CardActions>
  </Card>
);
