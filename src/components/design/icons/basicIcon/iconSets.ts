import iconDefinitions from '../../../../icons/x15Icons.json';

export const allIconNames: string[] = [];

export interface IconDefinition {
  paths: string[];
  width?: number;
  height?: number;
  isMulticolor: boolean;
}

export interface IconSet {
  label: string;
  icons: {
    [name: string]: IconDefinition
  };
}

export const IconSets = iconDefinitions.iconSets.map((iconSet) => {
  const thisSet: IconSet = { label: '', icons: {} };

  const { selection, metadata, height } = iconSet;

  thisSet.label = metadata.name;

  thisSet.icons = iconSet.icons.reduce<{ [name: string]: IconDefinition }>((acc, icon) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { id, paths, isMulticolor } = icon;
    const match = selection.find((item) => item.id === id);
    const name = match?.name;

    if (match && name) {
      allIconNames.push(name);

      acc[name] = {
        paths,
        height,
        isMulticolor
      };
    }

    return acc;
  }, {});

  return thisSet;
});

export const FlatIconSet = IconSets?.reduce((acc, iconSet) => ({ ...acc, ...iconSet.icons }), {});

export const IconList = allIconNames;

export default {
  IconSets,
  FlatIconSet,
  IconList
};
