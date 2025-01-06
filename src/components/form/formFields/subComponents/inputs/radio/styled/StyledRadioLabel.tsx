'use client';

import React from 'react';
import { Tooltip } from '../../../../../../design/tooltip/Tooltip';
import { RadioInputLabelProps } from '../radioInputsProps';

export const StyledRadioLabel: React.FC<RadioInputLabelProps> = (
  {
    text,
    inputId,
    srInstruction,
    labelTooltip,
    customContent,
    isChecked
  }
) => (
  <span className="labelText">
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
    {
      isChecked
        ? text.checked
        : text.unchecked
    }
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

export default StyledRadioLabel;
