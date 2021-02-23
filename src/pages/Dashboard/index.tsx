import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Container } from 'theme-ui';

import { ProjectProvider } from '../../ctx/ProjectContext';

import Toolbar from '../../components/Toolbar';
import Sidebar from '../../components/Sidebar';
import Languages from '../../components/Languages';

import { getProjects, selector as projectsSelector } from '../../store/projects';
import { selector as languagesSelector } from '../../store/languages';

const Dashboard = () => {
  const dispatch = useDispatch();
  const projects = useSelector(projectsSelector.entities);
  const languages = useSelector(languagesSelector.entities);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch, languages]);

  return (
    <Container
      sx={{
        px: 3
      }}
    >
      <Toolbar />
      {projects.map(p => (
        <ProjectProvider key={p.project_id} projectId={p.project_id}>
          <Flex
            sx={{
              py: 3,
              borderBottom: '1px solid',
              borderColor: 'muted'
            }}
          >
            <Sidebar project={p} />
            <Languages langs={p.statistics.languages} />
          </Flex>
        </ProjectProvider>
      ))}
    </Container>
  );
};

export default Dashboard;
