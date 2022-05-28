import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x246ddc61F957B8Ff3ce84Bdcde9Ca5Ef625147E6"
);

export default instance;
