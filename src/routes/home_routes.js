import AuctionListView from "../components/AuctionListView/AuctionListView"

const routes = [
  {
    path: '/',
    component: AuctionListView,
    exact: true,
  },
  {
    path: '/bidders',
    component: AuctionListView,
    exact: true,
  },
  {
    path: '/comments',
    component: AuctionListView,
    exact: true,
  },
  {
    path: '/share',
    component: AuctionListView,
    exact: true,
  },
]

export default routes
