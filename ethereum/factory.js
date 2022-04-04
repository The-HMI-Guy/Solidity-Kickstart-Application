import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x1a1a36713426D6EeE97000fF48Efcc9918A8a5FA6'
);

export default instance;