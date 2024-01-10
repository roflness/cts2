import React from 'react';

const ProjectDataGrid = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      <table>
        <thead>
          <tr>
            <th>Project Number</th>
            <th>Project Name</th>
            <th>Organization Name</th>
            <th>Program</th>
            {/* Add other columns as needed */}
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.projectNumber}</td>
              <td>{project.projectName}</td>
              <td>{project.organizationName}</td>
              <td>{project.program}</td>
              {/* Add other columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default ProjectDataGrid;
