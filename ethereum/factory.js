import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x973BB8D0007305F58721243984D60d8B4Bca2a0F'
);

export default instance;