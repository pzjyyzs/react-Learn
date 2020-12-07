import Discover from "@/pages/discover/Discover";
import Friend from "@/pages/friend/Friend";
import Mine from "@/pages/mine/Mine";


const routes = [
    {
        path: '/discover',
        component: Discover
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/friend',
        component: Friend
    }
]

export default routes;

