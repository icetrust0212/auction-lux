import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { ButtonGroupProps, ArrowProps, DotProps } from 'react-multi-carousel/lib/types';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import './carosuel.css';

interface CustomLeftArrowProps extends ArrowProps {
  myOwnStuff?: string;
}
const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
  
  return <button className="btn btn-left color-light" onClick={() => onClick ? onClick() : ''}><ChevronLeft /></button>
}
const CustomRightArrow = ({ onClick }: CustomLeftArrowProps) => {
  return <button className="btn btn-right color-light" onClick={() => onClick ? onClick() : ''}><ChevronRight /></button>
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Carosuel = (props: PropsType) => {
  return (
    <Carousel responsive={responsive} customLeftArrow={<CustomLeftArrow />} customRightArrow={<CustomRightArrow />}>
      {props.children}
    </Carousel>
  )
}
interface ArrowPropsType {
  carouselState?: any
}
interface PropsType {
  children?: any,
  customRightArrow?: any
}
export default Carosuel;