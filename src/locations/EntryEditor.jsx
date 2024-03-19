import React, { Component } from 'react';
import * as CC from '@contentful/f36-components';
import { useState, useSDK } from '@contentful/react-apps-toolkit';

const Entry = () => {
  const sdk = useSDK();

  return (
    <div className='cc-container'>
      <CC.Heading> Not implemented yet </CC.Heading>
    </div>
  );
};

export default Entry;
