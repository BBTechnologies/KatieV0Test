import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Base/Typography',
  parameters: {
    docsOnly: true
  }
};

export default meta;

export const Typography: StoryObj = {
  render: () => (
    <>
      <div className="typographyDemo" title="headings">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>

      <div className="typographyDemo" title="paragraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl tellus, feugiat et gravida quis,
          finibus in mauris. Suspendisse semper mauris ut imperdiet iaculis. Donec tempor massa quis semper faucibus.
          Praesent tempus vitae eros eget tincidunt.
        </p>
        <p>
          Phasellus quis nunc rutrum, efficitur dui id, tincidunt magna. Vivamus imperdiet massa efficitur aliquet
          blandit. Morbi convallis tempus arcu.
        </p>
      </div>

      <div className="typographyDemo" title="list">
        <ul>
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
          <li>Unordered list item 3</li>
          <li>Unordered list item 4</li>
          <ul>
            <li>Nested unordered list item 1</li>
            <li>Nested unordered list item 2</li>
            <li>Nested unordered list item 3</li>
            <li>Nested unordered list item 4</li>
          </ul>
        </ul>

        <br />

        <ol>
          <li>Ordered list item 1</li>
          <li>Ordered list item 2</li>
          <li>Ordered list item 3</li>
          <li>Ordered list item 4</li>
          <ol>
            <li>Nested ordered list item 1</li>
            <li>Nested ordered list item 2</li>
            <li>Nested ordered list item 3</li>
            <li>Nested ordered list item 4</li>
          </ol>
        </ol>

        <br />

        <h5>class: noBullet</h5>
        <ul className="noBullet">
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
          <li>Unordered list item 3</li>
          <li>Unordered list item 4</li>
          <ul>
            <li>Nested unordered list item 1</li>
            <li>Nested unordered list item 2</li>
            <li>Nested unordered list item 3</li>
            <li>Nested unordered list item 4</li>
          </ul>
        </ul>
      </div>
    </>
  )
};
