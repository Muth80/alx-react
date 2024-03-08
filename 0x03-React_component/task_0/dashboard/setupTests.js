import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // Or other appropriate version

Enzyme.configure({ adapter: new Adapter() });
