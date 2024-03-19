import React, { useEffect } from 'react';
import { Paragraph } from '@contentful/f36-components';
import { useCMA, useSDK } from '@contentful/react-apps-toolkit';
import * as CC from '@contentful/f36-components';

const CONTENT_FIELD_ID = 'body';

const Sidebar = () => {
  const sdk = useSDK();
  const cma = useCMA();

  //** Constants for texts used */
  const SHOW_HIDE_HEADER = "Show/Hide";
  const FIELD_HEADER = "Fields";
  const REQUIREMENTS_MESSAGE = "This App requires the first field to be an empty JSON object";
  const MISSING_JSON_ERROR_MESSAGE = "ERROR: Missing JSON object as first object";

  var encounteredError = false;
  var toggles = sdk.entry.fields[0];
 
  useEffect(() => {
    console.log(sdk);
    sdk.window.startAutoResizer();

    
  });

  //** Template for show/hide settings element on sidebar */
  function generateSettings(field) {
    return (
      <div 
        className='cc-sidebar-field' 
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
          {field.name}
        </CC.Paragraph>
        <CC.Switch
          isChecked={true}//{toggles[field.id]}
          id={field.id}
          onChange={() => toggleHandler(field.id)}
        >
        </CC.Switch>
      </div>
    );
  }

  //** Template for error message on sidebar */
  function generateError(errormsg){
    return (
      <CC.Paragraph
        style={{
          fontStyle: 'italic',
          color: 'red'
        }}  
      >
        {errormsg}
      </CC.Paragraph>
    );
  }

  //** Template for header message on sidebar */
  function generateHeader(){
    return (
      <div 
        className='cc-sidebar-field' 
        style={{
          display:'flex',
          justifyContent:'left'
        }}
      >
        <CC.Paragraph 
          style={{
            width:'70%', 
            fontWeight:'bold'
          }}
        >
          {FIELD_HEADER}
        </CC.Paragraph>
        <CC.Paragraph 
          style={{
            width:'30%', 
            fontWeight:'bold', 
            wordWrap:'normal', 
            textAlign: 'right'
          }}
        >
          {SHOW_HIDE_HEADER}
        </CC.Paragraph>
      </div>
    );
  }

  //** Show/Hide switch handler */
  function toggleHandler(prevState){

  }

  return (
    <div className='cc-sidebar'>

      <CC.Paragraph 
        style={{
          fontStyle:'italic'
        }}
      >
        {REQUIREMENTS_MESSAGE}
      </CC.Paragraph>

      {generateHeader()}
      
      {
        Object.values(sdk.entry.fields).map((field, i) => {
          let dom = '';
          //toggles[field.id] = toggles[field.id] ? toggles[field.id] : true;

          if(!encounteredError && i > 0){
            dom = generateSettings(field);
          }else{
            if(field.type !== 'Object'){
              dom = generateError(MISSING_JSON_ERROR_MESSAGE);
            }
          }

          return dom;
        })
      }
    </div>
  );
};

export default Sidebar;
