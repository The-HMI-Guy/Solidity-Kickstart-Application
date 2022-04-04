import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x0c4e4d1086F57ee18Ace4FF29AcB7Acd5662B563'
);

export default instance;