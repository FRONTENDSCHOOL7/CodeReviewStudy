import React from 'react';
import logo from '../../images/logo.svg';
import logoCircle from '../../images/logoCircle.svg';
import {
  HeaderComponent,
  Logo,
  LogoCircle,
  Quote,
  QuoteBox,
  StrongSpan,
  Title,
} from './header.styled';

export default function Header() {
  return (
    <HeaderComponent>
      <LogoCircle src={logoCircle} alt='logocircle' />
      <Logo src={logo} alt='logo' />
      <Title>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</Title>
      <QuoteBox>
        <Quote>
          <StrongSpan>1만 시간의 법칙</StrongSpan>은
        </Quote>
        <Quote>어떤 분야의 전문가가 되기 위해서는</Quote>
        <Quote>최소한 1만 시간의 훈련이 필요하다는 법칙이다.</Quote>
      </QuoteBox>
    </HeaderComponent>
  );
}
