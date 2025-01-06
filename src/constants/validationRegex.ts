export const DEFAULT_PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\^!@#$%^&*()_\-+={[}\]|\\:;"'<,>.?/ ]).{8,16}$/;

export const DEFAULT_EMAIL_REGEX = /^[^@]+@[^@]+\.[^@]+$/;

export default {
  DEFAULT_PASSWORD_REGEX,
  DEFAULT_EMAIL_REGEX
};
