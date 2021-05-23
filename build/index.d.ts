import { Coordinate } from './sdr33packages/coordinate/coordinate';
import { Sdr33Export } from './sdr33message/sdr33message';
declare const sdr33Toolbox: {
    Coordinate: typeof Coordinate;
    Sdr33Export: typeof Sdr33Export;
};
export default sdr33Toolbox;
