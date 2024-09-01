import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Area", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployAreaOfShapes() {
    // Contracts are deployed using the first signer/account by default
    const [owner] = await hre.ethers.getSigners();

    const Area = await hre.ethers.getContractFactory("Area");
    const area = await Area.deploy();

    return { area };
  }

  describe("Deployment", function () {
    it("Should calculate the area of a triangle", async function () {
      const { area } = await loadFixture(deployAreaOfShapes);

      expect(await area.AreaOfATriangle(4, 5)).to.equal(10);
    });

    it("Should calculate the area of a rectangle", async function () {
      const { area } = await loadFixture(deployAreaOfShapes);

      expect(await area.AreaOfARectangle(4, 5)).to.equal(20);
    });

    it("Should calculate the area of a square", async () => {
      const { area } = await loadFixture(deployAreaOfShapes);
      expect(await area.AreaOfASquare(6)).to.equal(36);
    });
  });
});
