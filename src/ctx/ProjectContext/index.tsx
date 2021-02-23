import React, { useContext } from 'react';
import { Project } from '../../api';

interface ProjectContextType {
  projectId: Project['project_id'] | undefined;
}

const defaultValue = {
  projectId: undefined
};

const ProjectContext = React.createContext<ProjectContextType>(defaultValue);

export const ProjectProvider: React.FC<ProjectContextType> = ({ projectId, ...props }) => (
  <ProjectContext.Provider
    {...props}
    value={{
      projectId
    }}
  />
);

export const useProject = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new TypeError('useProject must be used within a ProjectProvider');
  }
  return context;
};

export default ProjectContext;
