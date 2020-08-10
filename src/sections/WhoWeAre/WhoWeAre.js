import React from 'react';
import MiniCard from 'components/mini_card/mini_card.component';
import { MiniCardsStyle, WhoAreWeTextContainer, WhoAreWeText } from './WhoAreWe.style';
import { ReactComponent as User } from 'assets/img/user.svg';
import { ReactComponent as Rocket } from 'assets/img/rocket.svg';
import { ReactComponent as Cash } from 'assets/img/cash.svg';
import { ReactComponent as Diamond } from 'assets/img/diamond.svg';

export default function WhoWeAre() {
  const info = [
    {
      title: 'About Us',
      image: <User />,
      data_aos: 'zoom-in',
      data_aos_duration: '500',
      brief: 'Uptima drives innovation across all sectors by using advancements in software and hardware technology.',
    },
    {
      title: 'Our Mission',
      image: <Rocket />,
      data_aos: 'zoom-in',
      data_aos_duration: '700',
      brief: 'To improve life and help businesses realise their full potentail through innovative technological solutions.',
    },
    {
      title: 'Our Vision',
      image: <Cash />,
      data_aos: 'zoom-in',
      data_aos_duration: '900',
      brief: 'To be the one-stop for all our client’s software, hardware and cloud computing needs.',
    },
    {
      title: 'Our Values',
      image: <Diamond />,
      data_aos: 'zoom-in',
      data_aos_duration: '1100',
      brief: 'We committed to making sure our customers get utmost satisfaction from our products and services.',
    },
  ];

  return (
    <>
      <WhoAreWeTextContainer id="/#who-we-are">
        <WhoAreWeText>
          <h2>Who are we</h2>
          <p data-aos="fade-up" data-aos-duration={1000}>
            Uptima drives innovation across all sectors by using advancement in software and hardware technology. Etiam vitae hendrerit lectus. Ut sed arcu eu lorem imperdiet gravida. Vivamus tellus
            risus, consectetur ac ornare nec, ullamcorper sed elit. Mauris et vulputate augue.
          </p>
        </WhoAreWeText>
      </WhoAreWeTextContainer>
      <MiniCardsStyle>
        {info.map((i) => (
          <MiniCard info={i} />
        ))}
      </MiniCardsStyle>
    </>
  );
}
