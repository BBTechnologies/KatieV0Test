import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SimpleButton } from './SimpleButton';
import { buttonSizeClasses, buttonStateClasses } from './buttonVariations';

const meta: Meta<typeof SimpleButton> = {
  title: 'Forms/Buttons/Button styles',
  component: SimpleButton
};

export default meta;

type Story = StoryObj<typeof SimpleButton>;

const FullRangeOfButtonStyles: React.FC<{ buttonColor: string }> = ({ buttonColor }) => (
  <div className="buttonStylesDemo">
    <h2>{ buttonColor } button styles</h2>

    <div className="buttonStatesDemos">
      <button type="button" className={ `button ${ buttonColor }` }>default</button>
      {
        buttonStateClasses.map((buttonState) => (
          <button key={ `${ buttonColor }${ buttonState }` }
            type="button"
            className={ `button ${ buttonColor } ${ buttonState }` }
          >{ buttonState }
          </button>
        ))
      }
    </div>

    {
      buttonSizeClasses.map((buttonSizeClass) => (
        <div className="buttonSizeDemos" key={ `${ buttonColor }${ buttonSizeClass }` }>
          <button type="button"
            className={ `button ${ buttonColor } ${ buttonSizeClass }` }
          >{ buttonSizeClass }
          </button>

          {
            buttonStateClasses.map((buttonState) => (
              <button key={ `${ buttonColor }${ buttonSizeClass }${ buttonState }` }
                type="button"
                className={ `button ${ buttonColor } ${ buttonSizeClass } ${ buttonState }` }
              >{ buttonSizeClass } { buttonState }
              </button>
            ))
          }
        </div>
      ))
    }
    <h2>{ buttonColor } inverse button styles</h2>
    <h3>On white</h3>
    <div className="demoOnWhite">
      <div className="buttonStatesDemos">
        <button type="button" className={ `button ${ buttonColor } inverse` }>default inverse</button>
        {
          buttonStateClasses.map((buttonState) => (
            <button key={ `${ buttonColor }${ buttonState }inverse` }
              type="button"
              className={ `button ${ buttonColor } ${ buttonState } inverse` }
            >{ buttonState } inverse
            </button>
          ))
        }
      </div>

      {
        buttonSizeClasses.map((buttonSizeClass) => (
          <div className="buttonSizeDemos" key={ `${ buttonColor }${ buttonSizeClass }` }>
            <button type="button"
              className={ `button ${ buttonColor } ${ buttonSizeClass } inverse` }
            >{ buttonSizeClass } inverse
            </button>

            {
              buttonStateClasses.map((buttonState) => (
                <button key={ `${ buttonColor }${ buttonSizeClass }${ buttonState }inverse` }
                  type="button"
                  className={ `button ${ buttonColor } ${ buttonSizeClass } ${ buttonState } inverse` }
                >{ buttonSizeClass } { buttonState } inverse
                </button>
              ))
            }
          </div>
        ))
      }
    </div>

    <h3>On black</h3>
    <div className="demoOnBlack">
      <div className="buttonStatesDemos">
        <button type="button" className={ `button ${ buttonColor } inverse` }>default inverse</button>
        {
          buttonStateClasses.map((buttonState) => (
            <button key={ `${ buttonColor }${ buttonState }inverseOnBlack` }
              type="button"
              className={ `button ${ buttonColor } ${ buttonState } inverse` }
            >{ buttonState } inverse
            </button>
          ))
        }
      </div>

      {
        buttonSizeClasses.map((buttonSizeClass) => (
          <div className="buttonSizeDemos" key={ `${ buttonColor }${ buttonSizeClass }OnBlack` }>
            <button type="button"
              className={ `button ${ buttonColor } ${ buttonSizeClass } inverse` }
            >{ buttonSizeClass } inverse
            </button>

            {
              buttonStateClasses.map((buttonState) => (
                <button key={ `${ buttonColor }${ buttonSizeClass }${ buttonState }inverseOnBlack` }
                  type="button"
                  className={ `button ${ buttonColor } ${ buttonSizeClass } ${ buttonState } inverse` }
                >{ buttonSizeClass } { buttonState } inverse
                </button>
              ))
            }
          </div>
        ))
      }
    </div>

  </div>
);

export const PrimaryButtonStyles: Story = {
  render: () => <FullRangeOfButtonStyles buttonColor="primary" />
};

export const SecondaryButtonStyles: Story = {
  render: () => <FullRangeOfButtonStyles buttonColor="secondary" />
};

export const TertiaryButtonStyles: Story = {
  render: () => <FullRangeOfButtonStyles buttonColor="tertiary" />
};
