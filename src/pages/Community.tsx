import FeedCommunity from "../components/community/feedCommunity";
import HousesCommunity from "../components/community/housesCommunity";
import JoinCommunity from "../components/community/joinCommunity";

const Community = () => {

    return  (
        <div className="bg-dorado-clasico py-20">
            <FeedCommunity/>
            <HousesCommunity/>
            <JoinCommunity/>
        </div>
    )
}

export default Community