import { FacebookAds } from 'expo';

import {
    OPEN_CHORDS_MODAL,
    CLOSE_CHORDS_MODAL
} from './types';

export const openChordsModal = () => ({
    type: OPEN_CHORDS_MODAL,
    payload: true
});

let expirationDate;

export const closeChordsModal = () => {
    if (!expirationDate || new Date() > expirationDate) {
        expirationDate = new Date(
            new Date().getTime() + (2 * 60 * 1000)
        );
        FacebookAds.InterstitialAdManager.showAd('318505008618467_318530155282619')
            .then(console.log('Interstitial Ad Shown'))
            .catch(err => console.log('Interstitial Ad Error', err));
        return { type: CLOSE_CHORDS_MODAL, payload: false };
    }
};