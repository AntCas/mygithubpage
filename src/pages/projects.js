import React from "react";
import Link from "gatsby-link";
import DynamicOutlines from 'dynamic-outlines';
import { graphql } from 'gatsby';

import Layout from '../layouts';

import About from '../components/About';
import PageBreak from '../components/PageBreak';

import routes from '../constants/routes';

import './index.scss';

export default function Projects({ data }) {
  const { edges } = data.allMarkdownRemark;

  const posts = edges.filter(post => post.node.frontmatter.title.length > 0
                                      && post.node.frontmatter.path.includes('/projects/'))
        .map(({ node: post }, idx) => {
          const { color } = post.frontmatter; 
          const postId = `blog-post-preview-${idx}`;
  
          return (
            <Link to={post.frontmatter.path} key={idx}>
              <div className="blog-post-preview"
                id={ postId }
                style={{ background: post.frontmatter.color }}>
                {post.frontmatter.image &&
                  <img className="project-logo"
                    alt={ `${post.frontmatter.title}` }
                    src={ `${routes.LOGO}/${post.frontmatter.image}` } />
                }
                <DynamicOutlines
                  parentId={ postId }
                  borderColor={ color }
                  borderGap={ 6 }
                  borderWidth={ 4 }
                  transitionTime="150ms" />
              </div>
            </Link>
          );
        });

  return (
    <Layout>
      <div className="index-page">
        <h2>Projects</h2>
        <div className="posts">
          { posts }
        </div>
        <About />
        <PageBreak />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            image
            color
          }
        }
      }
    }
  }
`;
