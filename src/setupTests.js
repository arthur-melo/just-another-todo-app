import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import 'jest-localstorage-mock';

jest.spyOn(Storage.prototype, 'setItem');
jest.spyOn(Storage.prototype, 'getItem');
jest.spyOn(Storage.prototype, 'removeItem');

Enzyme.configure({ adapter: new Adapter() });
