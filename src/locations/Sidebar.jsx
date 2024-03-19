import React, { useEffect } from 'react';
import { useSDK } from '@contentful/react-apps-toolkit';
import * as CC from '@contentful/f36-components';
import $ from 'jquery';

const Sidebar = () => {
  const sdk = useSDK();

  useEffect(() => {
    sdk.window.startAutoResizer();
  });

  return (
    <div 
      className='cc-sidebar' 
      style={{
        display:'flex', 
        justifyContent:'left'
      }}
    >
      <CC.Paragraph 
        style={{
          width:'100%', 
          wordWrap:'normal'
        }}
      >
        To be implemented
      </CC.Paragraph>
    </div>
  );
};

export default Sidebar;
