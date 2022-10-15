/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import { Button as MUIbutton } from '@mui/material';

export const Button = qwikify$((text) => {
    return (
        <>
            <MUIbutton variant="contained">Click</MUIbutton>
        </>
    );
});
