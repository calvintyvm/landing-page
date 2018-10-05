import React, { Component } from 'react';
import styled from 'styled-components';
import imageLogo from '../assets/images/logo.jpg';

class Home extends Component {
  render() {
    return (
      <Root>
        <Content>
          <LogoImage src={imageLogo} />
          <Promo>
            <h1>Promo Code</h1>
            <Ticket>
              <h2>BISMO10</h2>
            </Ticket>
            <h1>For $10 OFF!</h1>
          </Promo>
          <SignUp>200 points for signing up</SignUp>
          <a href="https://cannabismo.ca/">
            <Button>click now to visit</Button>
          </a>
        </Content>
      </Root>
    );
  }
}

export default Home;

const SignUp = styled.h1`
  width: 80%;
  text-align: center;
`;

const Promo = styled.div`
  height: 30%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: lighter;
  }
`;

const Button = styled.button`
  &,
  &:after {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  background: none;
  width: 233px;
  height: 62px;
  text-transform: uppercase;
  border: 2px solid green;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: green;
  letter-spacing: 1px;
  position: relative;
  cursor: pointer;
  z-index: 99;
  &:before,
  &:after {
    background: green;
    content: '';
    position: absolute;
    z-index: -1;
  }
  &:hover {
    color: white;
  }
  &:hover:after {
    width: 100%;
  }
  &:after {
    height: 100%;
    left: 0;
    top: 0;
    width: 0;
  }
`;

const Content = styled.div`
  justify-content: space-between;
  font-weight: lighter;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  height: 80%;
  align-items: center;
  text-transform: uppercase;
  font-family: 'Lato';
`;

const LogoImage = styled.img`
  height: 130px;
  width: 300px;
`;

const Root = styled.div`
  background: white;
  height: 85vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  position: relative;
  top: 50%;
  transform: translateY(8%);
`;

const Ticket = styled.span`
  width: 200px;
  height: 55px;
  position: relative;
  border: 2px solid black;
  color: black;
  text-transform: uppercase;
  text-align: center;
  display: inline-block;
  padding-top: 10px;

  &:before,
  &:after {
    height: 90px;
    width: 45px;
    content: '';
    position: absolute;
    top: 0.9em;
    top: calc(0.9em - 1px);
    height: 1.2em;
    width: 0.6em;
    border: 2px solid black;
  }
  &:before {
    left: -2px;
    border-radius: 0 1em 1em 0;
    border-left-color: white;
  }
  &:after {
    right: -2px;
    border-radius: 1em 0 0 1em;
    border-right-color: white;
  }
`;
