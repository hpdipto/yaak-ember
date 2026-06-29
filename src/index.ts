import type { PluginDefinition } from "@yaakapp/api";

const ember = {
  base: {
    black: "#1c1b19",
    950: "#242320",
    900: "#2e2c28",
    850: "#383632",
    800: "#44413c",
    700: "#5c5850",
    600: "#746e64",
    500: "#8c867c",
    300: "#b8b0a0",
    200: "#cec6b4",
    150: "#dcd4c2",
    100: "#e6dcc8",
    50: "#f0e8d8",
    paper: "#faf4e6",
  },
  coral:  { 400: "#e08060", 600: "#b84c30", 950: "#281814", 50: "#f8e0d4" },
  orange: { 400: "#c09058", 600: "#946030", 950: "#261c0e", 50: "#f4e4d0" },
  gold:   { 400: "#c8b468", 600: "#7a6820", 950: "#22200c", 50: "#f4ecd0" },
  olive:  { 400: "#8a9868", 600: "#4a6830", 950: "#1a1e10", 50: "#e8ecd0" },
  sage:   { 400: "#80a090", 600: "#386858", 950: "#141e1c", 50: "#dce8e0" },
  steel:  { 400: "#7890a0", 600: "#3a6080", 950: "#121a22", 50: "#dce4e8" },
  rose:   { 400: "#b07878", 600: "#905050", 950: "#221414", 50: "#f0dcd8" },
  mauve:  { 400: "#988090", 600: "#706070", 950: "#1c161a", 50: "#ece4e8" },
};

export const plugin: PluginDefinition = {
  themes: [
    {
      id: "ember-soft",
      label: "Ember Soft",
      dark: true,
      base: {
        surface: ember.base[950],
        surfaceHighlight: ember.base[850],
        surfaceActive: ember.base[800],
        text: ember.base[200],
        textSubtle: ember.base[500],
        textSubtlest: ember.base[700],
        border: ember.base[850],
        borderSubtle: ember.base[800],
        borderFocus: ember.base[700],
        selection: ember.base[700] + "66",
        shadow: "#00000033",
        backdrop: "#00000066",
        primary: ember.coral[400],
        secondary: ember.sage[400],
        info: ember.steel[400],
        success: ember.olive[400],
        notice: ember.gold[400],
        warning: ember.orange[400],
        danger: ember.rose[400],
      },
      components: {
        sidebar: {
          surface: ember.base[900],
          border: ember.base[850],
          borderSubtle: ember.base[800],
        },
        appHeader: {
          surface: ember.base[900],
          border: ember.base[850],
        },
        dialog: {
          surface: ember.base[900],
          border: ember.base[800],
        },
        responsePane: {
          surface: ember.base[950],
          border: ember.base[850],
        },
        templateTag: {
          surface: ember.coral[950],
          text: ember.coral[400],
        },
        toast: {
          surface: ember.base[900],
          border: ember.base[700],
        },
      },
    },
    {
      id: "ember-light",
      label: "Ember Light",
      dark: false,
      base: {
        surface: ember.base.paper,
        surfaceHighlight: ember.base[100],
        surfaceActive: ember.base[150],
        text: ember.base.black,
        textSubtle: ember.base[600],
        textSubtlest: ember.base[300],
        border: ember.base[100],
        borderSubtle: ember.base[150],
        borderFocus: ember.base[200],
        selection: ember.base[200] + "66",
        shadow: "#00000019",
        backdrop: "#00000033",
        primary: ember.coral[600],
        secondary: ember.sage[600],
        info: ember.steel[600],
        success: ember.olive[600],
        notice: ember.gold[600],
        warning: ember.orange[600],
        danger: ember.rose[600],
      },
      components: {
        sidebar: {
          surface: ember.base[50],
          border: ember.base[100],
          borderSubtle: ember.base[150],
        },
        appHeader: {
          surface: ember.base[50],
          border: ember.base[100],
        },
        dialog: {
          surface: ember.base[50],
          border: ember.base[150],
        },
        responsePane: {
          surface: ember.base.paper,
          border: ember.base[100],
        },
        templateTag: {
          surface: ember.coral[50],
          text: ember.coral[600],
        },
        toast: {
          surface: ember.base[50],
          border: ember.base[200],
        },
      },
    },
  ],
};
