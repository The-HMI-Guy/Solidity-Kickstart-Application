import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x8A1E382ae0bD9728ED4948E236CB5eA8FFEC0d94'
);

export default instance;