/* eslint-disable camelcase */

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface PlaceData {
  address_components: AddressComponent[];
  name: string;
}

interface TransformedPlaceData {
  name: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
}

export const transformPlacesData = (placeData: PlaceData): TransformedPlaceData => {
  const { address_components, name } = placeData;

  const extractBasedOnType = (placeDataType: string, useShortName: boolean = false): string => {
    const data = address_components.find((component) => component.types.includes(placeDataType));

    if (data) {
      return useShortName ? data.short_name : data.long_name;
    }
    return '';
  };

  const subPremise = extractBasedOnType('subpremise');
  const streetNumber = extractBasedOnType('street_number');
  const streetName = extractBasedOnType('route');

  const address = `${ subPremise ? `${ subPremise }/` : '' }${ streetNumber ? `${ streetNumber } ` : '' }${
    streetName ? `${ streetName } ` : ''
  }`;

  const suburb = extractBasedOnType('locality');
  const state = extractBasedOnType('administrative_area_level_1', true);
  const country = extractBasedOnType('country', true);
  const postcode = extractBasedOnType('postal_code');

  return {
    name,
    address,
    suburb,
    state,
    postcode,
    country
  };
};

export interface NamePieces {
  firstName: string;
  lastName: string;
}

export const extractNamePieces = (name: string): NamePieces => {
  const posSpaceName = name.lastIndexOf(' ');
  const posDotName = name.lastIndexOf('.');
  const posUnderscoreName = name.lastIndexOf('_');

  if (posSpaceName === -1) {
    if (posDotName !== -1) {
      return {
        firstName: name.substring(0, posDotName),
        lastName: name.substring(posDotName + 1)
      };
    }

    if (posUnderscoreName !== -1) {
      return {
        firstName: name.substring(0, posUnderscoreName),
        lastName: name.substring(posUnderscoreName + 1)
      };
    }
  }

  return {
    firstName: name.substring(0, posSpaceName),
    lastName: name.substring(posSpaceName + 1)
  };
};
