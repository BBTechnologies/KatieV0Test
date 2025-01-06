/* eslint-disable */
import Enzyme, { shallow as enzymeShallow, mount as enzymeMount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'regenerator-runtime/runtime';

// Configure Enzyme with the new adapter
Enzyme.configure({ adapter: new Adapter() });

// Declare the types of global variables
declare global {
  var shallow: typeof enzymeShallow;
  var mount: typeof enzymeMount;
}

// Assign the values to global variables
global.shallow = enzymeShallow;
global.mount = enzymeMount;
