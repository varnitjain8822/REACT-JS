import React from "react";

function Projects() {
  const projects = [
    { name: "Portfolio Website", description: "My personal portfolio built with React." },
    { name: "Todo App", description: "A simple todo application using React and TailwindCSS." },
    { name: "Chat App", description: "Real-time chat app using Node.js and Socket.io." },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-20 p-4">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">{proj.name}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
