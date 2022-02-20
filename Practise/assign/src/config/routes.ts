import IRoute from "../interfaces/route";

import HomePage from '../pages/Home';
import DetailPage from '../pages/Detail';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/detail',
        name: 'Detail Page',
        component: DetailPage,
        exact: true
    }
];

export default routes;