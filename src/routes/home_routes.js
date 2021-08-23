import AuctionListView from "../components/AuctionListView/AuctionListView"
import Bidders from "../components/Bidders/Bidders"
import Comments from "../components/Comments/Comments"
import Share from "../components/Share/Share"

const routes = [
  {
    path: '/',
    component: AuctionListView,
    exact: true,
  },
  {
    path: '/bidders',
    component: Bidders,
    exact: true,
  },
  {
    path: '/comments',
    component: Comments,
    exact: true,
  },
  {
    path: '/share',
    component: Share,
    exact: true,
  },
]

export default routes
