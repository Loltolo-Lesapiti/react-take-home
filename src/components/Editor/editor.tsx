import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BlockNoteView,
  ReactSlashMenuItem,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import "./editor.css" 
import React from "react";
const insertHeader1 = (editor: BlockNoteEditor) => {
  const currentBlock = editor.getTextCursorPosition().block;
  const headerBlock = {
    type: "heading",
    level: 1,
    content: [{ type: "text", text: "" }], 
  };
  editor.insertBlocks([headerBlock], currentBlock, "after");
};

const insertExpandableHeader1 = (editor: BlockNoteEditor) => {
  const currentBlock = editor.getTextCursorPosition().block;
  const expandableHeaderBlock = {
    type: "heading", 
    level: 1,
    content: [{ type: "text", text: "" }], 
  };
  editor.insertBlocks([expandableHeaderBlock], currentBlock, "after");
};

const insertHeader1Item: ReactSlashMenuItem = {
  name: "Header 1",
  execute: insertHeader1,
  aliases: ["Headers","/1"],
  group: "Add Block",
  icon: <FontAwesomeIcon icon="fa-solid fa-t" />, 
  hint: "short: type# + space",
};

const insertExpandableHeader1Item: ReactSlashMenuItem = {
  name: "Expandable Header 1",
  execute: insertExpandableHeader1,
  aliases: ["Headers","/2"],
  group: "Add Block",
  icon: <FontAwesomeIcon icon="fa-solid fa-t" />, 
  hint: "short: type>># + space",
};
const customSlashMenuItemList = [
  insertHeader1Item,
  insertExpandableHeader1Item,
];

export default function Editor() {
  const editor = useBlockNote({
    slashMenuItems: customSlashMenuItemList,
  });

  return <BlockNoteView className="editor" editor={editor} theme={"light"} />;
}
