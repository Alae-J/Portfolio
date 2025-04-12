import { ProjectDescription, ProjectMiniatures, ProjectsUrl, ProjectTitles } from 'helpers/helpers';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AboutView from 'views/aboutView/aboutView';
import ContactView from 'views/contactView/contactView';
import CvView from 'views/cvView/cvView';
import MainView from 'views/mainView/mainView';
import ProjectsView from 'views/projectsView/projectsView';
import SkillsView from 'views/skillsView/skillsView';

const AppRoutes = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<MainView />} />
            <Route path="/about" element={<AboutView />} />
            <Route
              path="/projects"
              element={
                <ProjectsView
                  ProjectMiniatures={ProjectMiniatures}
                  ProjectsUrl={ProjectsUrl}
                  ProjectDescription={ProjectDescription}
                  ProjectTitles={ProjectTitles}
                />
              }
            />
            <Route path="/skills" element={<SkillsView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/CV" element={<CvView />} />
            <Route
              path="/completed"
              element={
                <ProjectsView
                  ProjectMiniatures={ProjectMiniatures}
                  ProjectsUrl={ProjectsUrl}
                  ProjectDescription={ProjectDescription}
                  ProjectTitles={ProjectTitles}
                />
              }
            />
          </Routes>
        </Router>
  );
}
export default AppRoutes;