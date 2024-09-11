export const localizationConfig = {
  messages: {
    ui: {
      // Translations of internal UI components of the editor.js core
      blockTunes: {
        toggler: {
          "Click to tune": "Натисність, щоб налаштувати",
          "or drag to move": "або перетяніть",
        },
      },
      inlineToolbar: {
        converter: {
          "Convert to": "Конвертувати в",
        },
      },
      toolbar: {
        toolbox: {
          Add: "Додати",
        },
      },
    },

    toolNames: {
      // Section for translation Tool Names: both block and inline tools
      Text: "Параграф",
      Heading: "Заголовок",
      Quote: "Цитата",
      Checklist: "Чеклист",
      List: "Список",
      Link: "Посилання",
      Marker: "Маркер",
      Bold: "Жирний",
      Italic: "Курсив",
      Delimiter: "Розлілювач",
      Underline: "Підкреслення",
      ChangeCase: "Змінити регістр",
    },

    tools: {
      // Section for passing translations to the external tools classes
      // The first-level keys of this object should be equal of keys ot the 'tools' property of EditorConfig
      "Add a link": "Вставте посилання",

      image: {
        "With border": "З рамкою",
        "Stretch image": "Розтягнути",
        "With background": "З фоном",
        Caption: "Опис картинки",
      },

      list: {
        Unordered: "Не впорядкований",
        Ordered: "Впорядкований",
      },

      quote: {
        "Align Left": "Вирівняти по лівому краю",
        "Align Center": "Вирівняти по центру",
        "Enter a caption": "Підпис цитати",
      },

      header: {
        "Heading 2": "Заголовок 2",
        "Heading 3": "Заголовок 3",
        "Heading 4": "Заголовок 4",
      },
    },

    blockTunes: {
      // Section allows to translate Block Tunes

      delete: {
        Delete: "Видалити",
      },

      moveUp: {
        "Move up": "Перемістити вище",
      },
      moveDown: {
        "Move down": "Перемістити нижче",
      },
    },
  },
};
