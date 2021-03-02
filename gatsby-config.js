module.exports = {
    siteMetadata: {
        title: `Ricardo Amb`,
        description: `Designer por formação, desenvolvedor por paixão. Acho que essa frase é a que mais resume a minha essência profissional. Ao longo dos tempos tive a oportunidade de trabalhar em mais de 100 projetos no Brasil e no mundo. A grande maioria destes projetos entregues de forma 100% online. Isso me faz focar mais energia no projeto e permite atender clientes de qualquer lugar do mundo.`,
        descriptionEn: `Designer by formation, developer by passion. I think this is the better way to define my professional essence. Over the years I had the opportunity to wotk with more than 100 projects on Brazil and in the world. The vast majority of these projects are delivered 100% online. This makes me focus more energy on the project and allows me to serve customers from anywhere in the world.`,
        descriptionEs: `Diseñador por formación, desarrollador por pasión. Creo que esta frase es la que más resume mi esencia profesional. A lo largo de los años tuve la oportunidad de trabajar en más de 100 proyectos en Brasil y en todo el mundo. La gran mayoría de estos proyectos se entregan 100% online. Esto me hace concentrar más energía en el proyecto y me permite atender a clientes de cualquier parte del mundo.`,
        author: `@ricardoambdev`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#161D26`,
                theme_color: `#161D26`,
                display: `minimal-ui`,
                icon: `src/images/my-icon.png`,
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-offline`,
    ],
};
