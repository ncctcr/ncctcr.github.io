import React from 'react';
import DosEmulator from '../../../../shared/DosEmulator';

const Doom = () => {
  return (
      // <DosEmulator bundleUrl={'/games/digger.jsdos'}/>
      <DosEmulator bundleUrl={'/games/doom.jsdos'}/>
  );
};

export default Doom;