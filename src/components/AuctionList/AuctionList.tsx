import { AuctionProduct } from "../../static/interfaces/AuctionProduct";
import AuctionItem from "../AuctionItem/AuctionItem";

const AuctionList = (props: PropsType) => {
    return (
        <>
            {props.items.map(auction => {
                return (
                    <div className="mb-4">
                        <AuctionItem item={auction} key={auction.id} />
                    </div>
                )
            })
            }
        </>
    )
}

interface PropsType {
    items: AuctionProduct[]
}
export default AuctionList;