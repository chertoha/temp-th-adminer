import EditorJS, { OutputData } from "@editorjs/editorjs";

import { FC } from "react";
import { useEffect, useRef } from "react";
import { EDITOR_JS_TOOLS } from "./editorTools.js";
import { localizationConfig } from "./localization";

interface IEditorProps {
  data: OutputData | undefined;
  setData: (data: OutputData) => void;
}

const Editor: FC<IEditorProps> = ({ data, setData }) => {
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: EDITOR_JS_TOOLS,
        data,
        async onChange(api, _event) {
          const data = await api.saver.save();
          setData(data);
        },
        hideToolbar: false,

        autofocus: true,

        i18n: localizationConfig,
        inlineToolbar: [
          "link",
          "marker",
          "bold",
          "italic",
          "underline",
          "changeCase",
        ],
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
    // eslint-disable-next-line
  }, []);

  return <div id="editorjs"></div>;
};

export default Editor;
