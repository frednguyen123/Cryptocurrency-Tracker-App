import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { useEffect } from 'react';
import { SingleCoin } from '../config/api';
import CoinInfo from '../components/Banner/CoinInfo';
import parse from 'html-react-parser';

const CoinPage = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState();

    const { currency, symbol } = CryptoState();

    const fetchCoin =  async () => {
        const { data } = await axios.get(SingleCoin(id));
        setCoin(data);
    };

    console.log(coin)

    useEffect(() => {
        fetchCoin();
    }, []);

    const useStyles = makeStyles((theme) => ({
        container: {
            display: "flex",
            [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                alignItems: "center",
            },
        },
        sidebar: {
            width: "30%",
            [theme.breakpoints.down("md")]: {
                width: "100%",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 25,
            borderRight: "2px solid grey"
        },
        heading: {
            fontWeight: "bold",
            marginBotton: 20,
            fontFamily: "Montserrat"
        }
    }));

    const classes = useStyles();

    return (
        <div classname={classes.container}>
            <div className={classes.sidebar}>
                <img 
                    src={coin?.image.large}
                    alt={coin?.name}
                    height="200"
                    style={{ marginBottom: 20 }}
                />
                <Typography variant="h3" className={classes.heading}>
                    {coin?.name};
                </Typography>
                <Typography variant="subtitle1" className={classes.description}>
                    {coin?.description.en.split(". ")[0]};
                </Typography>
                {/* Chart */}
                <CoinInfo coin={coin} />
            </div>
        </div>
    );
};

export default CoinPage;
