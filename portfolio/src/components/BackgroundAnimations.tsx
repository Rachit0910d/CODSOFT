import { useEffect } from 'react';

export function BackgroundAnimations() {
  useEffect(() => {
    // Particles
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer && particlesContainer.childElementCount === 0) {
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = particle.style.height = (Math.random() * 4 + 2) + 'px';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particlesContainer.appendChild(particle);
      }
    }

    // Code Rain
    const codeRain = document.getElementById('codeRain');
    let codeRainInterval: ReturnType<typeof setInterval>;
    if (codeRain && codeRain.childElementCount === 0) {
      const codeSnippets = [
        'const developer = new Awesome();',
        'function createMagic() { return innovation; }',
        'git push origin main',
        'npm run build',
        'docker-compose up',
        'kubectl apply -f app.yaml',
        'console.log("Hello World!");',
        'import React from "react";',
        'async/await fetchData()',
        'SELECT * FROM dreams WHERE possible = true;',
        'while(learning) { skills++; }',
        'if(coffee) { code(); }',
        '// TODO: Change the world',
        'export default Amazing;',
        'npm install happiness',
        'git commit -m "Mind blown 🤯"',
      ];

      function addCodeLine() {
        if (!codeRain) return;
        const line = document.createElement('div');
        line.className = 'code-line';
        line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        line.style.left = Math.random() * 100 + '%';
        line.style.animationDuration = (Math.random() * 6 + 12) + 's';
        line.style.fontSize = (Math.random() * 4 + 10) + 'px';
        codeRain.appendChild(line);

        setTimeout(() => {
          if (line.parentNode) {
            line.parentNode.removeChild(line);
          }
        }, 18000);
      }

      codeRainInterval = setInterval(addCodeLine, 2000);
      for (let i = 0; i < 5; i++) {
        setTimeout(addCodeLine, i * 500);
      }
    }

    // Neural Network
    const network = document.getElementById('neuralNetwork');
    if (network && network.childElementCount === 0) {
      const nodeCount = 20;
      const nodes: { element: HTMLDivElement; x: number; y: number }[] = [];

      for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        node.style.left = x + '%';
        node.style.top = y + '%';
        node.style.animationDelay = Math.random() * 3 + 's';
        network.appendChild(node);
        nodes.push({ element: node, x, y });
      }

      nodes.forEach((nodeA, i) => {
        nodes.forEach((nodeB, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2)
            );

            if (distance < 30) {
              const connection = document.createElement('div');
              connection.className = 'neural-connection';

              const angle = Math.atan2(nodeB.y - nodeA.y, nodeB.x - nodeA.x);
              const length = distance * (window.innerWidth / 100);

              connection.style.left = nodeA.x + '%';
              connection.style.top = nodeA.y + '%';
              connection.style.width = length + 'px';
              connection.style.transform = `rotate(${angle}rad)`;
              connection.style.animationDelay = Math.random() * 4 + 's';

              network.appendChild(connection);
            }
          }
        });
      });
    }

    return () => {
      if (codeRainInterval) clearInterval(codeRainInterval);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden" style={{ background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)' }}>
      <div className="particles-container" id="particles"></div>

      <div className="geometric-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="wave-animation"></div>

      <div className="code-rain" id="codeRain"></div>

      <div className="neural-network" id="neuralNetwork"></div>
    </div>
  );
}
