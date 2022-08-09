import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { BasicCounterTutorial } from '../tutorials/1-basic-counter/TutorialOne';
import { LandingPage } from './components/LandingPage';

export const reactBasicsRouteDefinitions = [
  {
    element: <BasicCounterTutorial />,
    path: '1-baisc-counter',
    name: '1. Basic Counter',
  },
];

export const AppRoutes = () => (
  <ReactRoutes>
    <Route path='/' element={<LandingPage />} />
    {reactBasicsRouteDefinitions.map((route) => (
      <Route key={route.path} element={route.element} path={route.path}></Route>
    ))}
  </ReactRoutes>
);
