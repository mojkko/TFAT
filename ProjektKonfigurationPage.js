import React, { useState } from "react";

const ProjektKonfigurationPage = () => {
  const [projectCreated, setProjectCreated] = useState(false);
  const [projectName, setProjectName] = useState("");

  const handleCreateProject = () => {
    // Handle creation of project
    setProjectCreated(true);
    // You may add logic to save the project name
  };

  return (
    <div>
      <h1>Projekt/Konfiguration Page</h1>
      {!projectCreated ? (
        // Show create project form
        <div>
          <h2>Projekt erstellen</h2>
          <label htmlFor="projectName">Projektname:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <button onClick={handleCreateProject}>Speichern</button>
        </div>
      ) : (
        // Show subpages if project is created
        <div>
          <h2>Subpages</h2>
          <ul>
            <li>Test-Konzeption</li>
            <li>Testframework</li>
            <li>Reporting</li>
            <li>Summary</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjektKonfigurationPage;