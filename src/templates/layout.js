import React from 'react';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';

const Header = (props) => {
  let links = props.data.allFile.edges.filter((edge) => {
    return edge.node.name !== '404';
  });
  return (
    <ul>
      {links.map((link) => {
        return (
          <li key={link.node.name}>
            <Link to={link.node.name === 'index' ? '/' : '/' + link.node.name}>
              {link.node.name === 'index' ? 'home' : link.node.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
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
    </div>
  );
};

export default Layout;
