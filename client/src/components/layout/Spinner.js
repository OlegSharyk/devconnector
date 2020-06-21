import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
    <Fragment>
        <img
            src={spinner}
            style={{ width: '75px', display: 'block', margin: '50px auto' }}
            alt={'Loading...'}
        />
    </Fragment>
);
