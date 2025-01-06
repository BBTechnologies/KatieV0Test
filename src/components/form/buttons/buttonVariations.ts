// TODO: Consider adding button class guides

export const buttonColorClasses = [
  'primary',
  'secondary',
  'tertiary',
  'primary inverse',
  'secondary inverse',
  'tertiary inverse',
  'invisible'
];

export const buttonSizeClasses = [
  'compact',
  'outline',
  'compact outline'
];

export const buttonStateClasses = [
  'hover',
  'focus',
  'active',
  'inactive',
  'disabled'
];

// Create union types for each array
export type ButtonColorClass = typeof buttonColorClasses[number];
export type ButtonSizeClass = typeof buttonSizeClasses[number];
export type ButtonStateClass = typeof buttonStateClasses[number];

// Define a type that allows a combination of at most one from each array
export type ButtonClassCombination = (
  ButtonColorClass | ButtonSizeClass | ButtonStateClass | string
  )[] & {
  length: 0 | 1 | 2 | 3;
};

export default {
  buttonColorClasses,
  buttonStateClasses,
  buttonSizeClasses
};
