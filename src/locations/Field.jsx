import React, { useEffect } from 'react';
import { Paragraph } from '@contentful/f36-components';
import { useSDK } from '@contentful/react-apps-toolkit';
import $ from 'jquery';

const Field = () => {
  const sdk = useSDK();
  var toggle = $("#hideContToggle").is(':checked');

  useEffect(() => {
    sdk.window.startAutoResizer();
  });

  return <Paragraph id={"hideContText"}>
    { 
      toggle?
        "This field is hidden via Content model. The model's field: "+sdk.field.name+", is set to use hide-contentful-fields.":""
    }
  </Paragraph>;
};

export default Field;
