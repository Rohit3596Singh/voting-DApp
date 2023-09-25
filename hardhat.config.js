require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "yLm1uRQvRZQkMpVb-G2elHYYkuyiv_lq";
const POLYGON_PRIVATE_KEY =
  "3faf5c68a2ab14ba7c53427db170fdbac2823e5018e12b50484516cc459d8e7c";
module.exports = {
  solidity: "0.8.0",

  networks: {
  polygon: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${POLYGON_PRIVATE_KEY}`],
    },
  },
};