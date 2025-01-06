import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';
import { IconSets } from './iconSets';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icons',
  component: Icon
};

export default meta;

type Story = StoryObj<typeof Icon>;

const IconSetsPreview: React.FC = () => (
  <div className="iconSetsPreview">
    {
      IconSets && IconSets.map((iconSet) => {
        const iconKeys = Object.keys(iconSet.icons);

        return (
          <div key={ iconSet.label }>
            <h2>{ iconSet.label }</h2>
            <ul className="noBullet iconSetPreview">
              {
                iconSet && iconSet.icons && iconKeys.map((iconKey) => {
                  const { isMulticolor, paths } = iconSet.icons[iconKey];

                  return (
                    <li key={ iconKey }>
                      <Icon icon={ iconKey } isMultiColor={ isMulticolor } pathsCount={ paths.length } />
                      { isMulticolor ? (
                        <code>{ `<Icon icon="${ iconKey }" isMultiColor pathsCount="${ paths.length }"/>` }</code>
                      ) : (
                        <code>{ `<Icon icon="${ iconKey }" />` }</code>
                      ) }
                    </li>
                  );
                })
              }
            </ul>
          </div>
        );
      })
    }
  </div>
);

export const IconFontPreview: Story = {
  render: () => (
    <div>
      <h2>Temporary icon set</h2>
      <p>
        This set was created using&nbsp;
        <a href="https://icomoon.io/app/#/select" target="_blank" rel="noreferrer">icomoon</a>&nbsp;
        from the free set they provide. Load the x15Icons.json file from src/icons to see/edit the set.
      </p>
      <IconSetsPreview />
    </div>
  )
};
