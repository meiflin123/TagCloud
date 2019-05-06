import React from 'react';
import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';

class MyCloud extends React.Component {

  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 3000);
  }

  
  render() {
    console.log(this.props.data)
    return (
      <div className='ui container'>
        {this.props.children}

        <div className='inner-container'>

         <TagCloud className='tag-cloud'
          style={{
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: () => randomColor(),
          padding: 5,
          width: '100%',
          height: '100%'
          }}>

        
          { this.props.data.map(item => 
           
            <div className="tag-item"
                 key={ this.props.data.indexOf(item) }
                 style={{ fontSize: Math.log2(item.value) * 10 }}
                 rotate={ item.value % 360 }>{item.word}

            </div>)}
        
         </TagCloud>

        </div>
      </div>
    );
  }
}

export default MyCloud;