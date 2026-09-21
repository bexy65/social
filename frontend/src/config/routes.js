import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Raids from "../../pages/Raids";
import Account from "../../pages/Account";
import CreateEvent from "../../pages/CreateEvent";
import Events from "../../pages/Events";
import RaidPage from "../../pages/RaidPage";
import EventPage from "../../pages/EventPage";

export const routes = [
    {
        path: "/",
        element: Home,
        protected: false
    },
    {
        path: "/login",
        element: Login,
        protected: false
    },
    {
        path: "/raids",
        element: Raids,
        protected: false
    },
    {
        path: "/profile",
        element: Account,
        protected: false
    },
    {
        path: "/create",
        element: CreateEvent,
        protected: false
    },
    {
        path: "/events",
        element: Events,
        protected: false
    },
    {
        path: "/raid/:id",
        element: RaidPage,
        protected: false
    },
    {
        path: "/event/:id",
        element: EventPage,
        protected: false
    }
];