import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
//modals
import ProjectModal from '../scenes/PersonalProjects/ProjectDisplay/ProjectModal';
//scenes
const Homepage = lazy(() => import('../scenes/Homepage/Homepage'));
const AboutMe = lazy(() => import('../scenes/AboutMe/AboutMe'));
const PersonalProjects = lazy(() => import('../scenes/PersonalProjects/Projects'));
const Resume = lazy(() => import('../scenes/Professional/Resume'));

export const routes = {
  HOMEPAGE: '/',
  ABOUTME: '/aboutme',
  PERSONALPROJECTS: '/personalprojects',
  PERSONALPROJECT: '/personalproject/:id',
  RESUME: '/resume',
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.HOMEPAGE} element={<Homepage />} />
        <Route path={routes.ABOUTME} element={<AboutMe />} />
        <Route path={routes.PERSONALPROJECTS} element={<PersonalProjects />} />
        <Route path={routes.PERSONALPROJECT} element={<ProjectModal />} />
        <Route path={routes.RESUME} element={<Resume />} />
      </Routes>

      {background && (
        <Routes>
          <Route path={routes.PERSONALPROJECT} element={<ProjectModal />} />
        </Routes>
      )}
    </>
  );
};

export default BaseRoutes;