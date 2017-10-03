import React, { Component } from 'react';
import { FacebookAds } from 'expo';

const BottomBannerAd = () => (
    <FacebookAds.BannerView
        placementId="318505008618467_318530518615916"
        type="standard"
        onPress={() => console.log('Banner ad clicked')}
        onError={err => console.log('Banner Ad Error', err)}
    />
);

export default BottomBannerAd;