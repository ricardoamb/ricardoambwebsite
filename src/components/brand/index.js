import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Brand = () => {
    const { brandImage } = useStaticQuery(
        graphql`
            query {
                brandImage: file(relativePath: { eq: "brand.png" }) {
                    childImageSharp {
                        fixed(width: 210, height: 60) {
                            ...GatsbyImageSharpFixed_tracedSVG
                        }
                    }
                }
            }
        `,
    );
    return <Img fixed={brandImage.childImageSharp.fixed} />;
};

export default Brand;
