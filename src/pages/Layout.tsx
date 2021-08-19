import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.css';

const Layout = (props: PropsType) => {
  
  return (
    <div className="layout-container">
      {props.children}
    </div>
  )
}

interface PropsType {
  children: any
}

export default Layout;