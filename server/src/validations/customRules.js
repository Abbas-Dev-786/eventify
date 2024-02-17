import vine from "@vinejs/vine";

const unique = async (value, options, field) => {
  if (typeof value !== "string") {
    return;
  }

  const row = await db
    .select(options.column)
    .from(options.table)
    .where(options.column, value)
    .first();

  if (row) {
    field.report("The {{ field }} field is not unique", "unique", field);
  }
};

export const uniqueRule = vine.createRule(unique);
