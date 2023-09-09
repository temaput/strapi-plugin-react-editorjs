import createGenericInlineTool from "editorjs-inline-tool";
import "./CustomInline.css";

export const SupInlineTool = createGenericInlineTool({
  sanitize: {
    sup: {},
  },
  tagName: "SUP",
  toolboxIcon:
    // icon editor-js uses
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M806 487v-96q0-30 20.5-50t50.5-20h64v-25H806v-71h135q30 0 50.5 20.5T1012 296v25q0 30-20.5 50T941 391h-64v25h135v71H806ZM186 930l207-326-193-302h159l121 194 120-194h160L566 604l208 326H613L480 717 347 930H186Z"/></svg>',
});

export const ItalicInlineTool = createGenericInlineTool({
  sanitize: {
    em: {},
  },
  tagName: "EM",
  toolboxIcon:
    // icon editor-js uses
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M175 889V743h166l111-332H301V265h446v146H601L490 743h131v146H175Z"/></svg>',
});

export const StrongInlineTool = createGenericInlineTool({
  sanitize: {
    strong: {},
  },
  tagName: "STRONG",
  toolboxIcon:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M222 889V262h303q78 0 135.5 48.5T718 434q0 39-18 74t-53 52v3q44 18 67.5 58t23.5 88q0 79-62 129.5T531 889H222Zm155-130h129q28 0 48.5-18t20.5-45q0-27-20.5-45.5T506 632H377v127Zm0-254h120q25 0 43.5-16.5T559 448q0-24-18.5-40.5T497 391H377v114Z"/></svg>',
});
