import { expect } from "chai";

describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const [owner, addr1, addr2] = await ethers.getSigners();

        const hardhatToken = await ethers.deployContract("Token");

        const ownerBalance = await hardhatToken.balanceOf(owner.address);

        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

        await hardhatToken.transfer(addr1.address, 1000);
        expect(await hardhatToken.balanceOf(addr1.address)).to.equal(1000);

        await hardhatToken.connect(addr1).bet(500, true);
        expect(parseInt(await hardhatToken.balanceOf(addr1))).to.be.oneOf([500, 1500]);
    });
});