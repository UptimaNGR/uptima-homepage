import React from 'react';
import { MiniCardStyle, MiniCardImgContainer, MiniCardHeader, MiniCardBrief } from './ministyle.style';

export default function MiniCard({ info }) {
  return (
    <MiniCardStyle data-aos={info.data_aos} data-aos-duration={info.data_aos_duration}>
      {info.image}
      {/* <className="mini-card-image" /> */}
      <MiniCardHeader>{info.title}</MiniCardHeader>
      <MiniCardBrief>{info.brief}</MiniCardBrief>
    </MiniCardStyle>
  );
}
