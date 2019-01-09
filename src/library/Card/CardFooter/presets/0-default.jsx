import React from 'react';
import CardFooter from '../CardFooter';
import CardBlock from '../../CardBlock/CardBlock';
import CardActions from '../../CardActions/CardActions';
import Button from '../../../Button';

export default (
  <CardFooter
    key="NH4JFP2A69U6GHFL7YLIMI9EZIM72IZR"
    expandable
    defaultIsOpen
    title="Card Footer Title">
    <CardBlock key="HRHMIQBTFTTJJH8LPE6XM77ANG2TRV31">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
      pretium massa. Aliquam erat volutpat. Nulla facilisi.
    </CardBlock>
    <CardActions key="791X7S1AMCT4S9CYT7JTG16JMQAQ666I">
      <Button key="SCGMAS5M2NJ0TY51HEF9JMO6REP1UF09" minimal>
        Button 1
      </Button>
      <Button key="DCFUSH8VLNCRVVNEPTAEEBTDNC8HUTNJ" primary>
        Button 2
      </Button>
    </CardActions>
  </CardFooter>
);
