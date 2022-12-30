import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import Layout from '../src/Shared/Layout/Component/Layout';

declare type Dungeon = {
    image: string,
    link: string,
    name: string,
}

const Home: React.FunctionComponent = () => {
    const dungeons: Array<Dungeon> = [
        {
            image: '/images/ui-ej-boss-echo-of-doragosa.png',
            link: '/dungeons/algethar-academy',
            name: "Algeth'ar Academy",
        },
        {
            image: '/images/ui-ej-boss-advisor-melandrus.png',
            link: '/dungeons/court-of-stars',
            name: 'Court of Stars',
        },
        {
            image: '/images/ui-ej-boss-odyn.png',
            link: '/dungeons/halls-of-valor',
            name: 'Halls of Valor',
        },
        {
            image: '/images/ui-ej-boss-kokia-blazehoof.png',
            link: '/dungeons/ruby-life-pools',
            name: 'Ruby Life Pools',
        },
        {
            image: '/images/ui-ej-boss-nerzhul.png',
            link: '/dungeons/shadowmoon-burial-grounds',
            name: 'Shadowmoon Burial Grounds',
        },
        {
            image: '/images/ui-ej-boss-sha-of-doubt.png',
            link: '/dungeons/temple-of-the-jade-serpent',
            name: 'Temple of the Jade Serpent',
        },
        {
            image: '/images/ui-ej-boss-umbrelskul.png',
            link: '/dungeons/the-azure-vault',
            name: 'The Azure Vault',
        },
        {
            image: '/images/ui-ej-boss-balakar-khan.png',
            link: '/dungeons/the-nokhud-offensive',
            name: 'The Nokhud Offensive',
        },
    ];

    const dungeonsJSX = dungeons.map((dungeon: Dungeon) => (
        <Grid key={dungeon.name} item xs={12} sm={6} md={3} sx={{ p: 2, my: 4 }}>
            <Link href={dungeon.link}>
                <Grid container alignItems="center" justifyContent="center" direction="column">
                    <Image
                        height={64}
                        width={128}
                        alt={dungeon.name}
                        src={dungeon.image}
                    />

                    <Typography color="secondary.main" sx={{ mt: 2 }}>{dungeon.name}</Typography>
                </Grid>
            </Link>
        </Grid>
    ));

    return (
        <Layout>
            <Box sx={{ pt: 16, pb: 2 }}>
                <Grid container>
                    {dungeonsJSX}
                </Grid>
            </Box>
        </Layout>
    );
};

export default Home;
