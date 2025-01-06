import React from 'react';
import { FormFieldProps } from './formFieldWrapper/formFieldProps';
import { FormField } from './formFieldWrapper/FormField';

export interface TextInputProps extends Omit<FormFieldProps, 'type'> {
  readonly type: 'text';
}

export const TextInput: React.FC<TextInputProps> = (props) => <FormField { ...props } />;

export interface EmailInputProps extends Omit<FormFieldProps, 'type'> {
  readonly type: 'email';
}

export const EmailInput: React.FC<EmailInputProps> = (props) => <FormField { ...props } />;

export interface DateInputProps extends Omit<FormFieldProps, 'type'> {
  readonly type: 'date';
}

export const DateInput: React.FC<DateInputProps> = (props) => <FormField { ...props } />;

export interface FileInputProps extends Omit<FormFieldProps, 'type'> {
  readonly type: 'file';
}

export const FileInput: React.FC<FileInputProps> = (props) => <FormField { ...props } />;

export interface SearchInputProps extends Omit<FormFieldProps, 'type'> {
  readonly type: 'search';
}

export const SearchInput: React.FC<SearchInputProps> = (props) => <FormField { ...props } />;

export interface NumberInputProps extends Omit<FormFieldProps, 'type'> {
  readonly type: 'number';
}

export const NumberInput: React.FC<NumberInputProps> = (props) => <FormField { ...props } />;

export interface PhoneInputProps extends Omit<FormFieldProps, 'type'> {
  readonly type: 'tel';
}

export const PhoneInput: React.FC<PhoneInputProps> = (props) => <FormField { ...props } />;

export interface UrlInputProps extends Omit<FormFieldProps, 'type'> {
  readonly type: 'url';
}

export const UrlInput: React.FC<UrlInputProps> = (props) => <FormField { ...props } />;

export interface PasswordInputProps extends Omit<FormFieldProps, 'type'> {
  readonly type: 'password';
}

export const PasswordInput: React.FC<PasswordInputProps> = (props) => <FormField { ...props } />;

export default {
  TextInput,
  EmailInput,
  DateInput,
  FileInput,
  SearchInput,
  NumberInput,
  PhoneInput,
  UrlInput,
  PasswordInput
};
