import React from 'react';
import { Button } from 'semantic-ui-react';

const CSButton = props => (
  <Button
    {...props}
    href="mailto:tema@coinsane.org"
    style={{
      backgroundImage: 'linear-gradient(94deg, #9a84ff, #575ef3)',
    }}
  />
);

export default CSButton;
