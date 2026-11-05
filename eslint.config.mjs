import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: ["arkcacor_newsite_db.sql", "**/*.pdf", "**/*.docx"],
  },
];

export default eslintConfig;
