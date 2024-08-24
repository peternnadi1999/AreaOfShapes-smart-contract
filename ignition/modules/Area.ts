import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AreaModule = buildModule("AreaModule", (m) => {
  const Area = m.contract("Area");

  return { Area };
});

export default AreaModule;
