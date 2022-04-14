import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x87f3385e497Fd5D712d306E4A5b5b018137e648b'
);

export default instance;