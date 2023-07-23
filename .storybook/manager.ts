// .storybook/manager.js

import { addons } from "@storybook/manager-api";
import kkn from "./kkn";

addons.setConfig({
  theme: kkn,
});
