import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

const Header = (props) => {
  let links = props.data.allFile.edges.filter((edge) => {
    return edge.node.name !== '404';
  });
  return (
    <header>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.node.name}>
              <Link
                to={link.node.name === 'index' ? '/' : '/' + link.node.name}
              >
                {link.node.name === 'index' ? 'home' : link.node.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

const Layout = ({ children }) => {
  return (
    <div id='layoutContainer'>
      <StaticQuery
        query={graphql`
          query {
            allFile(filter: { dir: { regex: "/pages/" } }) {
              edges {
                node {
                  name
                }
              }
            }
          }
        `}
        render={(data) => <Header data={data} />}
      />
      {children}
      <Helmet>
        <meta charSet='utf-8' />
        <title>Parrots</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <StyledFooter light>
      <div className='footer-content'>
        <p>&copy;Copyright 2021</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: oldlace;
  padding: 20px;
  .footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    max-width: 650px;
    background-color: ${(props) => (props.light ? 'oldlace' : 'slategrey')};
    color: ${(props) => (props.light ? 'slategrey' : 'oldlace')};
  }
`;

export default Layout;
