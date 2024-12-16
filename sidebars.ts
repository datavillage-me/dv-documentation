/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { loadSidebars } from "./loadSidebars";

// const importedSidebars = {
//   "0.1.0": ,
//   "0.2.0": await ,
// };

let importedSidebars = new Map<String, any>();

import("./docs/api/cage-manager/0.1.0/sidebar").then((sidebar) =>
  importedSidebars.set("0.1.0", sidebar)
);

console.log("imported sidebars");
// const importedSidebars["0.1.0"] = await import("./docs/api/cage-manager/0.1.0/sidebar");

const sidebars: SidebarsConfig = loadSidebars();

export default sidebars;
