'use client';

import React from 'react';
import { Tooltip } from '../../../../design/tooltip/Tooltip';
import { LabelProps } from '../../formFieldWrapper/formFieldProps';

export const FormFieldLabel: React.FC<LabelProps> = (
  {
    text,
    inputId,
    srInstruction,
    labelTooltip,
    hide,
    isRequired,
    customContent
  }
) => {
  const labelCssClass = `${ hide ? 'sr-only' : 'labelText' } ${ isRequired ? 'mandatory' : '' }`;

  return (
    <span className={ labelCssClass }>
      {
        customContent?.preLabel
        && <span className="preLabel">{ customContent?.preLabel }</span>
      }
      { srInstruction
        && (
          <span className="sr-only">
            { srInstruction }
          </span>
        ) }
      { text }
      {
        labelTooltip
        && (
          <Tooltip
            triggerId={ `${ inputId }_tooltip` }
            { ...(labelTooltip.icon ? { icon: labelTooltip.icon } : {}) }
          >
            { labelTooltip.text }
          </Tooltip>
        )
      }
      {
        customContent?.postLabel
        && <span className="postLabel">{ customContent?.postLabel }</span>
      }
    </span>
  );
};

export default FormFieldLabel;
