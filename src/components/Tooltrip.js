import React,{useState} from 'react';
import './../styles/App.css';

const Tooltrip = ({text, childern }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div className='tooltip'
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {childern}
      {
        visible && <span className='tooltiptext'>{text}</span>
      }
      
    </div>
  );
}

export default Tooltrip;
