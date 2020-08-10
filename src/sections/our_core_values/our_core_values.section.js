import React from 'react';
import { CardsStyle, OurCoreValuesStyle } from './our_core_values.style';
import Card from 'components/card/card.component';
import { ReactComponent as HandShake } from 'assets/img/handshake.svg';
import { ReactComponent as Trophy } from 'assets/img/trophy.svg';
import { ReactComponent as Passion } from 'assets/img/passion.svg';
import { ReactComponent as Hands } from 'assets/img/multi-hands.svg';
import { ReactComponent as Light } from 'assets/img/light.svg';
import { ReactComponent as SunShine } from 'assets/img/sunshine.svg';

export default function OurCoreValues() {
  const config = {
    className: 'card-img',
  };

  const info = [
    {
      title: 'Customer Commitment',
      image: <HandShake {...config} />,
      brief: 'We are committed to making sure our customers get utmost satisfaction from our products and services.',
    },
    {
      title: 'A Will To Win',
      image: <Trophy {...config} />,
      brief: 'We exhibit the drive in the market place and every aspect of our business.',
    },
    {
      title: 'Passion',
      image: <Passion {...config} />,
      brief: 'We love wha we do.',
    },
    {
      title: 'Team Work',
      image: <Hands {...config} />,
      brief: 'We always work together to achieve the best result.',
    },
    {
      title: 'Innovation',
      image: <Light {...config} />,
      brief: 'We continuously develop more simplified, efficient, and creative product, process and services.  ',
    },
    {
      title: 'Accountability',
      image: <SunShine {...config} />,
      brief: 'We are personally accountable for devilering on our commitment.',
    },
  ];

  return (
    <OurCoreValuesStyle>
      <h3 className="heading-text">Our Core Values</h3>
      <CardsStyle>
        {info.map((i) => (
          <Card info={i} />
        ))}
      </CardsStyle>
    </OurCoreValuesStyle>
  );
}
