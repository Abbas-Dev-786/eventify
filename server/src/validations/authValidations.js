import vine from "@vinejs/vine";
import { ValidationErrorReporter } from "./validationErrorReporter.js";
import { uniqueRule } from "./customRules.js";

vine.errorReporter = () => new ValidationErrorReporter();

export const registerValidations = vine.compile(
  vine.object({
    name: vine.string().trim().escape().minLength(2).maxLength(50),
    email: vine.string().trim().email(),
    // .use(uniqueRule({ table: "users", column: "email" })),
    password: vine.string().trim().minLength(8).maxLength(25).confirmed(),
  })
);
