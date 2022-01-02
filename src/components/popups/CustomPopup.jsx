import React from 'react';

const CustomPopup = (props) => {
   return (
      <div style={{position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999, background: 'rgba(0,0,0,0.5)' }}>
         {props.children}
      </div>
   )
}
export default CustomPopup
