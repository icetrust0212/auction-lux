import { Card, Col, Row } from 'react-bootstrap';
import { BellFill, ChatSquareDotsFill, Share } from 'react-bootstrap-icons';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { AuctionProduct } from '../../static/interfaces/AuctionProduct';
import { getRegularCurrency } from '../../utils/utils';
import OnboardingButton from '../common/OnboardingButton/OnboardingButton';
import './style.css';

const AuctionProductCard = ({ item }: PropsType) => {
    const { url, path, params } = useRouteMatch();
    const location = useLocation();
    const activeColor = 'var(--secondary-color)';
    const inActiveColor = 'var(--text-color-lighter)';
    return (
        <Card className="auction-product-card">
            <Card.Img variant="top" src={item.thumbnail} className="image"/>
            <Card.Body className="p-2">
                <Row className="p-1 m-0">
                    <Col md={8} className="p-0">
                        <Card.Text className="size-tiny color-dark m-0">Auction Start Goal: {item.buy_in_limit}</Card.Text>
                        <Card.Text className="size-tiny color-light m-0">Retail Value: {getRegularCurrency(item.max_retail_price)}</Card.Text>
                    </Col>
                    <Col md={4} className="p-0 d-flex justify-content-end">
                        <OnboardingButton className="size-tiny auction-btn">Buy-In</OnboardingButton>
                    </Col>
                </Row>
                <Row className="p-1 m-0">
                    <Col md={8} className="p-0 description ">
                        <Card.Text className="color-light size-tiny">{item.description}</Card.Text>
                    </Col>
                    <Col md={4} className="d-flex p-0 justify-content-end" >
                        <Link to={`${url}/comments`}><ChatSquareDotsFill color={location.pathname === `${url}/comments` ? activeColor : inActiveColor} size={12} style={{ marginRight: "8px" }} /></Link>
                        <Link to={`${url}/bidders`}><BellFill color={location.pathname === `${url}/bidders` ? activeColor : inActiveColor} size={12} style={{ marginRight: "8px" }} /></Link>
                        <Link to={`${url}/share`}><Share color={location.pathname === `${url}/share` ? activeColor : inActiveColor} size={12} style={{ marginRight: "8px" }} /></Link>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

interface PropsType {
    item: AuctionProduct
}

export default AuctionProductCard;