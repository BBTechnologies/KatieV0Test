import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Accordion } from '../accordion/Accordion';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltips',
  component: Tooltip
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Tooltips: Story = {
  render: () => (
    <div className="tooltipsPreview">
      <p>
        Tooltips are absolute positioned elements and may need to be adjusted
        &nbsp;relative to the DOM element that they are pointing to.
        &nbsp;It renders an SVG inside a span.
        &nbsp;They can be provided a trigger id for tracking interactions with
        &nbsp;the button element that controls the tooltip behaviors.
        &nbsp;Inspect the first tooltip for an example.
      </p>

      <h3>Default size</h3>
      <div style={{ height: '150px' }}>
        Hover over the icon to see the tooltip.
        <Tooltip triggerId="infoTooltip" icon="info">
          This is some content that will appear on hover of an icon.
        </Tooltip>
        <hr />
        You can also click to make it stay open.
        <Tooltip icon="info">
          This is some content that will appear on hover of an icon.
        </Tooltip>
        <hr />
        Use any icon.
        <Tooltip icon="eye">Content for eye icon.</Tooltip>
        <Tooltip icon="cog">Content for cog icon.</Tooltip>
      </div>

      <Accordion id="iconAccordion" heading="Test inside an accordion">
        <div style={{ height: '150px' }}>
          Hover over the icon to see the tooltip.
          <Tooltip triggerId="infoTooltip" icon="info">
            This is some content that will appear on hover of an icon.
          </Tooltip>
          <hr />
          You can also click to make it stay open.
          <Tooltip icon="info">
            This is some content that will appear on hover of an icon.
          </Tooltip>
          <hr />
          Use any icon.
          <Tooltip icon="eye">Content for eye icon.</Tooltip>
          <Tooltip icon="cog">Content for cog icon.</Tooltip>
        </div>
      </Accordion>

      <div>
        Short test.
        <Tooltip icon="info">This is some content that will appear on hover of an icon.</Tooltip>
        <br />
        <br />
        Pops down
        <Tooltip icon="info" customCssClass="shiftDown">
          This is some content that will appear on hover of an icon.
        </Tooltip>
      </div>

      <h3>Large size</h3>
      <div style={{ height: '150px' }}>
        Hover over the icon to see the tooltip.
        <Tooltip icon="info" customCssClass="large">
          This is some content that will appear on hover of an icon.
        </Tooltip>
        <hr />
        You can also click to make it stay open.
        <Tooltip icon="info" customCssClass="large">
          This is some content that will appear on hover of an icon.
        </Tooltip>
      </div>

      <div>
        Short test.
        <Tooltip icon="info" customCssClass="large">
          This is some content that will appear on hover of an icon.
        </Tooltip>
        <br />
        <br />
        Pops down
        <Tooltip icon="info" customCssClass="large shiftDown">
          This is some content that will appear on hover of an icon.
        </Tooltip>
      </div>

      <div style={{ textAlign: 'right', paddingRight: '30px' }}>
        Right test.
        <Tooltip icon="info" customCssClass="large">
          This is some content that will appear on hover of an icon.
        </Tooltip>
        <br />
        <br />
        Pops down
        <Tooltip icon="info" customCssClass="large shiftDown">
          This is some content that will appear on hover of an icon.
        </Tooltip>
      </div>

      <div style={{ height: '50px' }}>
        This contains markup.
        <Tooltip icon="info" containsBlockElements>
          Here is a list of items;
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Tooltip>
      </div>
    </div>
  )
};
