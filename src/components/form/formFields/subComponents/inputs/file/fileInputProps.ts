import React from 'react';
import { FormFieldProps } from '../../../formFieldWrapper/formFieldProps';

export interface ValidFilesProps {
  extensions?: string[];
  maxFileCount?: number;
  maxFileSize?: number;
}

export interface FileInputLabelStyleButtonProps {
  buttonCssClass?: string;
  maxFileCount?: number;
  maxFileSize?: string;
  restrictionsTxt?: string;
}

class FileUploadLabelStyleButtonProps {
}

export interface FileInputProps extends FormFieldProps {
  labelStyle?: 'default' | 'button';
  listStyle?: 'default' | 'reveal';
  labelStyleButtonProps?: FileUploadLabelStyleButtonProps;
  customFileUploadLabel?: string | React.ReactElement;
  validFiles?: ValidFilesProps;
}
