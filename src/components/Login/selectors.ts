import { createStructuredSelector } from 'reselect';

const system = (state:any) => state.system;

export default createStructuredSelector({
    system
});
