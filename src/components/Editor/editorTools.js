import Header from "@editorjs/header";
import List from "@editorjs/list";
import Delimiter from "@editorjs/delimiter";
import Marker from "@editorjs/marker";
import Underline from "@editorjs/underline";
import ChangeCase from "editorjs-change-case";
import Quote from "@editorjs/quote";
import ImageTool from "@editorjs/image";
import SimpleImage from "@editorjs/simple-image";
import ParagraphWithElignment from "editorjs-paragraph-with-alignment";

import { uploadImage } from "@/services/imageUploadService";
import { createImageApiUrl } from "@/helpers/createImageApiUrl";

export const EDITOR_JS_TOOLS = {
  paragraph: {
    class: ParagraphWithElignment,
    inlineToolbar: true,
  },

  header: {
    class: Header,
    config: {
      placeholder: "Enter a header",
      levels: [2, 3, 4],
      defaultLevel: 2,
      defaultAlignment: "left",
      inlineToolbar: true,
    },
    inlineToolbar: true,
  },

  list: {
    class: List,
    inlineToolbar: true,
  },

  delimiter: Delimiter,

  marker: Marker,
  underline: Underline,

  changeCase: {
    class: ChangeCase,
  },

  quote: {
    class: Quote,
    inlineToolbar: true,
  },

  image: {
    class: ImageTool,
    config: {
      uploader: {
        async uploadByFile(file) {
          const imageName = await uploadImage(file);
          return {
            success: 1,
            file: {
              url: createImageApiUrl(imageName),
            },
          };
        },
      },
    },
  },

  imageTool: {
    class: SimpleImage,
  },
};
