import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Raids from "../../pages/Raids";
import Account from "../../pages/Account";
import CreateEvent from "../../pages/CreateEvent";
import Events from "../../pages/Events";
import RaidPage from "../../pages/RaidPage";
import EventPage from "../../pages/EventPage";
import Register from "../../pages/Register";

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
        path: "/register",
        element: Register,
        protected: false
    },
    {
        path: "/raids",
        element: Raids,
        protected: false
    },
    {
        path: "/raid/:id",
        element: RaidPage,
        protected: false
    },
    {
        path: "/profile",
        element: Account,
        protected: true
    },
    {
        path: "/create",
        element: CreateEvent,
        protected: false
    },
    {
        path: "/create/:id",
        element: CreateEvent,
        protected: false
    },
    {
        path: "/events",
        element: Events,
        protected: false
    },
    {
        path: "/event/:id",
        element: EventPage,
        protected: false
    }
];