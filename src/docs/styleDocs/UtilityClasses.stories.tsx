import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Storybook metadata
const meta: Meta = {
  title: 'Base/Layout Utility Classes'
};

export default meta;

// Define the CSS classes to document
const alignmentCssClasses = [
  'centerAlign',
  'leftAlign',
  'rightAlign'
];

const spacingCssClasses = [
  'spaceBefore',
  'spaceBeforeCompact',
  'spaceAfter',
  'spaceAfterCompact'
];

const flexRowCssClasses = [
  'flexRow',
  'flexRowCompactGap',
  'flexRowWideGap'
];

const flexColumnCssClasses = [
  'flexColumn',
  'flexColumnCompactGap',
  'flexColumnWideGap'
];

const flexLayoutCssClasses = [
  'flex-1',
  'flex-1-2',
  'flex-1-3',
  'flex-1-4',
  'flex-2-1',
  'flex-3-1',
  'flex-4-1'
];

// Story definition
export const CSSClassList: StoryObj = {
  render: () => (
    <>
      <h3>Alignment</h3>
      <div className="cssClassDemos">
        { alignmentCssClasses.map((cssClass) => {
          const DemoMarkup = () => <div className={ cssClass }>{ cssClass }.</div>;

          return (
            <div className="cssClassDemo" key={ `demo_${ cssClass }` }>
              <DemoMarkup />
            </div>
          );
        }) }
      </div>

      <h3>Spacing</h3>
      <div className="cssClassDemos">
        { spacingCssClasses.map((cssClass) => {
          const DemoMarkup = () => <div className={ cssClass }>{ cssClass }.</div>;

          return (
            <div className="cssClassDemo" key={ `demo_${ cssClass }` }>
              <div className="demoElement" />
              <DemoMarkup />
              <div className="demoElement" />
            </div>
          );
        }) }
      </div>

      <h3>Basic flex</h3>
      <div className="cssClassDemos">
        { flexRowCssClasses.map((cssClass) => {
          const DemoMarkup = () => (
            <div className={ cssClass } title={ cssClass }>
              <div className="demoElement">Child 1</div>
              <div className="demoElement">Child 2</div>
              <div className="demoElement">Child 3</div>
              <div className="demoElement">Child 4</div>
            </div>
          );

          return (
            <div className="cssClassDemo cssClassFlexDemo" key={ `demo_${ cssClass }` }>
              <h4>{ cssClass }</h4>
              <DemoMarkup />
            </div>
          );
        }) }
      </div>

      <div className="cssClassDemos">
        { flexColumnCssClasses.map((cssClass) => {
          const DemoMarkup = () => (
            <div className={ cssClass } title={ cssClass }>
              <div className="demoElement">Child 1</div>
              <div className="demoElement">Child 2</div>
              <div className="demoElement">Child 3</div>
              <div className="demoElement">Child 4</div>
            </div>
          );

          return (
            <div className="cssClassDemo cssClassFlexDemo" key={ `demo_${ cssClass }` }>
              <h4>{ cssClass }</h4>
              <DemoMarkup />
            </div>
          );
        }) }
      </div>

      <h3>Flex layouts</h3>

      <div className="cssClassDemos cssClassDemosFlexLayouts">
        { flexLayoutCssClasses.map((cssClass) => {
          const DemoMarkup = () => (
            <div className={ `flexRow ${ cssClass }` } title={ `flexRow ${ cssClass }` }>
              <div className="demoElement">Child 1</div>
              <div className="demoElement">Child 2</div>
            </div>
          );

          return (
            <div className="cssClassDemo cssClassFlexDemo" key={ `demo_${ cssClass }` }>
              <h4>flexRow { cssClass }</h4>
              <DemoMarkup />
            </div>
          );
        }) }
      </div>
      <div className="cssClassDemos cssClassDemosFlexLayouts cssClassDemosFlexLayoutsColumn">
        <p>Note: </p>
        { flexLayoutCssClasses.map((cssClass) => {
          const DemoMarkup = () => (
            <div className={ `flexColumn ${ cssClass }` } title={ `flexColumn ${ cssClass }` }>
              <div className="demoElement">Child 1</div>
              <div className="demoElement">Child 2</div>
            </div>
          );

          return (
            <div className="cssClassDemo cssClassFlexDemo" key={ `demo_${ cssClass }` }>
              <h4>flexColumn { cssClass }</h4>
              <DemoMarkup />
            </div>
          );
        }) }
      </div>
    </>
  )
};
