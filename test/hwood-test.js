const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HWOOD", function () {
  it("Depoly the HWOOD and the balance should be correct", async function () {
    const HWOOD = await ethers.getContractFactory("HWOOD");
    const hwood = await HWOOD.deploy();
    await hwood.deployed();

    const totalSupply = await hwood.totalSupply()
    console.log("HWOOD total supply: ", totalSupply.toString());

    expect(await hwood.balanceOf("0x77Efc7cf9aa6E775cD2b1c7eC6B9ac98acBa6F7A")).to.equal(totalSupply.mul(150).div(1000));
    expect(await hwood.balanceOf("0x350907A113e220d2205365fCcF88760f5832CFCD")).to.equal(totalSupply.mul(120).div(1000));
    expect(await hwood.balanceOf("0x071ac5e7cc1dE6BDf635fA10e33a3d6dfD4c86a7")).to.equal(totalSupply.mul(100).div(1000));
    expect(await hwood.balanceOf("0x5B38396a53a57D09f8b972412ef6dbe56B6DA9a2")).to.equal(totalSupply.mul(200).div(1000));
    expect(await hwood.balanceOf("0x0CbecF6687E00364337E8A4BA6398aF6C22f27BF")).to.equal(totalSupply.mul(200).div(1000));
    expect(await hwood.balanceOf("0xB8494Ee2558d2f78Dc28474fE40462F8D496CE95")).to.equal(totalSupply.mul(165).div(1000));
    expect(await hwood.balanceOf("0xCa1Cc9cfEf09781BC0d0808A0FC8ad2ff6590A33")).to.equal(totalSupply.mul(5).div(1000));
    expect(await hwood.balanceOf("0x5A14e126a7DdF0aC2B048EDeB9b1706e813aCEeD")).to.equal(totalSupply.mul(60).div(1000));

  
  });
});
