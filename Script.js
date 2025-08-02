// Create animated particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
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

        // Create code rain effect
        function createCodeRain() {
            const codeRain = document.getElementById('codeRain');
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
                'git commit -m "Mind blown 🤯"'
            ];
            
            function addCodeLine() {
                const line = document.createElement('div');
                line.className = 'code-line';
                line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                line.style.left = Math.random() * 100 + '%';
                line.style.animationDuration = (Math.random() * 6 + 12) + 's';
                line.style.fontSize = (Math.random() * 4 + 10) + 'px';
                codeRain.appendChild(line);
                
                // Remove line after animation
                setTimeout(() => {
                    if (line.parentNode) {
                        line.parentNode.removeChild(line);
                    }
                }, 18000);
            }
            
            // Add lines periodically
            setInterval(addCodeLine, 2000);
            
            // Add initial lines
            for (let i = 0; i < 5; i++) {
                setTimeout(addCodeLine, i * 500);
            }
        }

        // Create neural network effect
        function createNeuralNetwork() {
            const network = document.getElementById('neuralNetwork');
            const nodeCount = 20;
            const nodes = [];
            
            // Create nodes
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
            
            // Create connections between nearby nodes
            nodes.forEach((nodeA, i) => {
                nodes.forEach((nodeB, j) => {
                    if (i !== j) {
                        const distance = Math.sqrt(
                            Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2)
                        );
                        
                        if (distance < 30) { // Only connect nearby nodes
                            const connection = document.createElement('div');
                            connection.className = 'neural-connection';
                            
                            const angle = Math.atan2(nodeB.y - nodeA.y, nodeB.x - nodeA.x);
                            const length = distance * (window.innerWidth / 100);
                            
                            connection.style.left = nodeA.x + '%';
                            connection.style.top = nodeA.y + '%';
                            connection.style.width = length + 'px';
                            connection.style.transform = `rotate(${angle}rad)`;
                            connection.style.transformOrigin = '0 0';
                            connection.style.animationDelay = Math.random() * 4 + 's';
                            
                            network.appendChild(connection);
                        }
                    }
                });
            });
        }

        // Add floating animation to project cards
        function addCardAnimations() {
            const cards = document.querySelectorAll('.project-card, .skill-category, .timeline-content');
            cards.forEach((card, index) => {
                card.style.animation = `floatCard 6s ease-in-out infinite`;
                card.style.animationDelay = (index * 0.5) + 's';
            });
        }

        // Add floating keyframe
        const floatingStyle = document.createElement('style');
        floatingStyle.textContent = `
            @keyframes floatCard {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-10px) rotate(1deg); }
            }
            
            .project-card:hover, .skill-category:hover {
                animation-play-state: paused;
                transform: translateY(-15px) scale(1.02);
            }
        `;
        document.head.appendChild(floatingStyle);

        // Initialize all animations when page loads
        window.addEventListener('load', () => {
            createParticles();
            createCodeRain();
            createNeuralNetwork();
            addCardAnimations();
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scrolling effect to navigation
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(10, 10, 10, 0.98)';
            } else {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
            }
        });

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections for animation
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        // Make the first section (hero) visible immediately
        document.querySelector('.hero').style.opacity = '1';
        document.querySelector('.hero').style.transform = 'translateY(0)';