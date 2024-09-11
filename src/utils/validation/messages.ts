const MESSAGE = {
  REQUIRED_FIELD: "Це поле є обов'язковим для заповнення",

  VALID_EMAIL: "Це поле повинне бути валідним імейлом",

  MIN_SYMBOLS: (amount: number) =>
    `Це поле повинно мати не менше ${amount} символів"`,

  MAX_SYMBOLS: (amount: number) =>
    `Це поле повинно мати не більше ${amount} символів"`,

  MIN_VALUE_NUM: (amount: number) =>
    `Кількість значень цього поля повинно бути не менше ${amount}`,

  MAX_VALUE_NUM: (amount: number) =>
    `Кількість значень цього поля повинно бути не більше ${amount}`,

  NUM_ONLY: "Це поле може мати тільки цифри",
};

export default MESSAGE;
