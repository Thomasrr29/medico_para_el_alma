import { lazy, Suspense } from "react";
import LoaderComponent from "../components/ui/LoaderComponent";

const HousesCommunity = lazy(() => import("../components/community/housesCommunity"));
const ImageCommunity = lazy(() => import("../components/community/imageCommunity"));
const JoinCommunity = lazy(() => import("../components/community/joinCommunity"));
const FeedCommunity = lazy(() => import("../components/community/feedCommunity"));

const Community = () => {

    return  (
        <Suspense fallback={<LoaderComponent color="dorado-clasico"/>}>
            <ImageCommunity/>
            <FeedCommunity/>
            <HousesCommunity/>
            <JoinCommunity/>
        </Suspense>

        
    )
}

export default Community