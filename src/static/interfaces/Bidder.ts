
export interface Bidder {
    id: string | number,
    auction_id: string | number,
    avatar?: string,
    name: string,
    member_since: string | Date,
    comment?: string,
    point: string | number,
    recent_win: {
        title: string,
        price: string | number,
        date: string | Date,
    },
    rank: number
}
