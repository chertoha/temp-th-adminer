class ValidateImage {
  private static files: File[] | null;
  private static errors: string[] = [];

  public static init(files: File[] | null): typeof ValidateImage {
    this.errors = [];
    this.files = files;
    return this;
  }

  public static type(
    extensions: string[],
    message: string = "Не вірний формат файла"
  ): typeof ValidateImage {
    const hasWrongTypes = this.files?.some(
      ({ name }) => !extensions.includes(name.split(".")[1].toLowerCase())
    );
    if (hasWrongTypes) this.errors.push(message);

    return this;
  }

  public static size(
    maxSizeMb: number,
    message: string = `Mаксимальний розмір одного файлу ${maxSizeMb} Мб`
  ): typeof ValidateImage {
    const maxSize = maxSizeMb * 1024 * 1024;

    const hasWrongSize = this.files?.some(({ size }) => size > maxSize);
    if (hasWrongSize) this.errors.push(message);

    return this;
  }

  public static limit(
    limit: number,
    message = `Максимальна кількість файлів ${limit}`
  ): typeof ValidateImage {
    const hasWrongLimit = this.files && this.files.length > limit;
    if (hasWrongLimit) this.errors.push(message);

    return this;
  }

  public static catch(handler: (message: string) => void): boolean {
    const hasErrors = this.errors.length > 0;
    hasErrors && handler(this.errors.join(", "));

    return hasErrors;
  }
}

export default ValidateImage;
