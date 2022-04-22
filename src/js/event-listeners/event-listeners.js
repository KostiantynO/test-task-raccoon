import { getRefs } from '../getRefs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const initListeners = () => {
  const { openPremiumOfferBtn } = getRefs();

  openPremiumOfferBtn?.addEventListener('click', () => {
    Notify.success('TODO: Open shop page');
  });
};
