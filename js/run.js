import Highway from "@dogstudio/highway";
import Slide from "./script";

const H = new Highway.Core({
  transitions: {
    default: Slide,
  },
});
