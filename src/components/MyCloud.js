import React from 'react';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

const MyCloud = (props) => {

 
    return (
      <div className='container'>
        {props.children}
        <div className='inner-container'>

         <TagCloud 
          style={{
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: () => randomColor(),
          padding: 5,
          width: '100%',
          height: '100%'
          }}>

        
          { props.data.map(item => 

            <div key={props.data.indexOf(item)}
                 style={{fontSize: Math.log2(item.value) * 50}}
                 rotate={ item.value % 360 }>{item.word}</div>)}
        
         </TagCloud>

        </div>
      </div>
    );
 
}

export default MyCloud;