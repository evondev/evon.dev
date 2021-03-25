/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
import { createRenderer } from "fela";
import felaPluginEmbedded from "fela-plugin-embedded";
import kebabCase from "fela-plugin-kebab-case";
import webPreset from "fela-preset-web";
import multipleSelectors from "fela-plugin-multiple-selectors";
import sortClassNames from "fela-sort-classnames";
import monolithic from "fela-monolithic";
import fallbackValue from "fela-plugin-fallback-value";
import prefixer from "fela-plugin-prefixer";
import removeDebugClass from "./removeDebugClass";
import sortMediaQueryMobileFirst from "fela-sort-media-query-mobile-first";

const SKIPPED_CLASSNAMES = [
  "ad",
  "ads",
  "adv",
  "bi",
  "fb",
  "ig",
  "pin",
  "tw",
  "vk",
];

export default function getRenderer() {
  const isDevMode = process.env.NODE_ENV !== "production";
  const enhancers = isDevMode
    ? [
        sortClassNames(),
        sortMediaQueryMobileFirst(),
        monolithic({ prettySelectors: true }),
      ]
    : [sortClassNames(), sortMediaQueryMobileFirst()];
  const renderer = createRenderer({
    filterClassName: (className) => !SKIPPED_CLASSNAMES.includes(className),
    selectorPrefix: "",
    keyframePrefixes: ["-webkit-", "-moz-"],
    devMode: isDevMode,
    enhancers,
    plugins: [
      ...webPreset,
      multipleSelectors(),
      felaPluginEmbedded(),
      kebabCase(),
      fallbackValue(),
      prefixer(),
      removeDebugClass(isDevMode),
    ],
  });
  return renderer;
}
