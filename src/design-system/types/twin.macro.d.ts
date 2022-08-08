import * as twin from "twin.macro";
import styledImport, {
  createGlobalStyle,
  css as cssImport,
} from "styled-components";

declare module "twin.macro" {
  const styled: typeof styledImport;
  const css: typeof cssImport;
  const global: typeof createGlobalStyle;
}
