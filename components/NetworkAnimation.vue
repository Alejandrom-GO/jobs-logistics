<template>
    <div class="network-container">
      <canvas ref="canvasRef" class="network-canvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const canvasRef = ref(null);
  const nodes = ref([]);
  const connections = ref([]);
  const animationId = ref(null);
  const animationStartTime = ref(Date.now());
  
  onMounted(() => {
    const canvas = canvasRef.value;
    const ctx = canvas.getContext('2d');
  
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
  
      // Initialize nodes
      initializeNodes();
    };
  
    const initializeNodes = () => {
      if (!canvas) return;
  
      const nodesList = [];
      const connectionsList = [];
      
      const regions = [
        { name: "northAmerica", x: 0.2, y: 0.3, count: 6 },
        { name: "southAmerica", x: 0.3, y: 0.6, count: 4 },
        { name: "europe", x: 0.5, y: 0.25, count: 6 },
        { name: "africa", x: 0.5, y: 0.5, count: 4 },
        { name: "asia", x: 0.7, y: 0.35, count: 8 },
        { name: "australia", x: 0.8, y: 0.6, count: 2 },
      ];
  
      let idCounter = 0;
  
      const continents = [
        // North America
        [
          [0.1, 0.2],
          [0.25, 0.2],
          [0.3, 0.35],
          [0.25, 0.4],
          [0.15, 0.35],
          [0.1, 0.2],
        ],
        // South America
        [
          [0.25, 0.4],
          [0.3, 0.4],
          [0.35, 0.6],
          [0.25, 0.7],
          [0.2, 0.5],
          [0.25, 0.4],
        ],
        // Europe
        [
          [0.45, 0.2],
          [0.55, 0.2],
          [0.55, 0.3],
          [0.45, 0.35],
          [0.45, 0.2],
        ],
        // Africa
        [
          [0.45, 0.35],
          [0.55, 0.3],
          [0.6, 0.5],
          [0.5, 0.6],
          [0.4, 0.5],
          [0.45, 0.35],
        ],
        // Asia
        [
          [0.55, 0.2],
          [0.8, 0.2],
          [0.85, 0.35],
          [0.75, 0.45],
          [0.6, 0.5],
          [0.55, 0.3],
          [0.55, 0.2],
        ],
        // Australia
        [
          [0.75, 0.55],
          [0.85, 0.55],
          [0.85, 0.65],
          [0.75, 0.65],
          [0.75, 0.55],
        ],
      ];
  
      const regionToContinentIdx = {
        northAmerica: 0,
        southAmerica: 1,
        europe: 2,
        africa: 3,
        asia: 4,
        australia: 5,
      };
  
      regions.forEach((region) => {
        const continentIdx = regionToContinentIdx[region.name];
        const continentPoints = continents[continentIdx];
        for (let i = 0; i < region.count; i++) {
          // Distribuye los nodos a lo largo de los puntos de la silueta
          const pointIdx = Math.floor(i * continentPoints.length / region.count);
          const [px, py] = continentPoints[pointIdx];
          const x = px * canvas.width;
          const y = py * canvas.height;
          nodesList.push({
            id: idCounter++,
            x,
            y,
            size: 2 * 5 * 1.1 * 1.1 * 0.95 * 0.95 * 0.95,
            region: region.name,
            connections: [],
            color: '#ff9800',
            opacity: 0,
            scale: 0
          });
        }
      });
  
      nodes.value = nodesList;
  
      // Create connections
      // Local connections within regions
      nodesList.forEach((node, i) => {
        const sameRegionNodes = nodesList.filter((n, idx) => n.region === node.region && idx !== i);
  
        if (sameRegionNodes.length > 0) {
          const targetNode = sameRegionNodes[Math.floor(Math.random() * sameRegionNodes.length)];
          const targetIndex = nodesList.indexOf(targetNode);
  
          if (!node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
            connectionsList.push({
              source: i,
              target: targetIndex,
              active: Math.random() < 0.3,
              progress: 0,
              speed: 0.003 + Math.random() * 0.005,
            });
          }
        }
      });
  
      // Global connections between regions
      regions.forEach((region) => {
        const regionNodes = nodesList.filter((n) => n.region === region.name);
        const otherRegions = regions.filter((r) => r.name !== region.name);
  
        otherRegions.forEach((otherRegion) => {
          if (Math.random() < 0.5) {
            const sourceNode = regionNodes[Math.floor(Math.random() * regionNodes.length)];
            const sourceIndex = nodesList.indexOf(sourceNode);
  
            const targetRegionNodes = nodesList.filter((n) => n.region === otherRegion.name);
            const targetNode = targetRegionNodes[Math.floor(Math.random() * targetRegionNodes.length)];
            const targetIndex = nodesList.indexOf(targetNode);
  
            if (sourceNode && targetNode && !sourceNode.connections.includes(targetIndex)) {
              sourceNode.connections.push(targetIndex);
              connectionsList.push({
                source: sourceIndex,
                target: targetIndex,
                active: Math.random() < 0.3,
                progress: 0,
                speed: 0.002 + Math.random() * 0.003,
              });
            }
          }
        });
      });
  
      connections.value = connectionsList;
    };
  
    const drawWorldMap = () => {
      if (!ctx || !canvas) return;
  
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 0.5 * 5;
  
      // Simple world map outline
      const continents = [
        // North America
        [
          [0.1, 0.2],
          [0.25, 0.2],
          [0.3, 0.35],
          [0.25, 0.4],
          [0.15, 0.35],
          [0.1, 0.2],
        ],
        // South America
        [
          [0.25, 0.4],
          [0.3, 0.4],
          [0.35, 0.6],
          [0.25, 0.7],
          [0.2, 0.5],
          [0.25, 0.4],
        ],
        // Europe
        [
          [0.45, 0.2],
          [0.55, 0.2],
          [0.55, 0.3],
          [0.45, 0.35],
          [0.45, 0.2],
        ],
        // Africa
        [
          [0.45, 0.35],
          [0.55, 0.3],
          [0.6, 0.5],
          [0.5, 0.6],
          [0.4, 0.5],
          [0.45, 0.35],
        ],
        // Asia
        [
          [0.55, 0.2],
          [0.8, 0.2],
          [0.85, 0.35],
          [0.75, 0.45],
          [0.6, 0.5],
          [0.55, 0.3],
          [0.55, 0.2],
        ],
        // Australia
        [
          [0.75, 0.55],
          [0.85, 0.55],
          [0.85, 0.65],
          [0.75, 0.65],
          [0.75, 0.55],
        ],
      ];
  
      continents.forEach((continent) => {
        ctx.beginPath();
        ctx.moveTo(continent[0][0] * canvas.width, continent[0][1] * canvas.height);
  
        for (let i = 1; i < continent.length; i++) {
          ctx.lineTo(continent[i][0] * canvas.width, continent[i][1] * canvas.height);
        }
  
        ctx.stroke();
      });
    };
  
    const draw = () => {
      if (!ctx || !canvas) return;
  
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw world map
      drawWorldMap();
  
      const nodesList = nodes.value;
      const connectionsList = connections.value;
      const currentTime = Date.now();
      const elapsedTime = (currentTime - animationStartTime.value) / 1000; // Convert to seconds
  
      // Draw nodes with animation first
      nodesList.forEach((node) => {
        // Calculate animation progress (1.5 seconds duration)
        const animationProgress = Math.min(1, elapsedTime / 1.5);
        
        // Update node properties
        node.opacity = Math.min(1, animationProgress);
        node.scale = Math.min(1, animationProgress);
        
        const finalSize = node.size * node.scale;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, finalSize, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}${Math.floor(node.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });

      // Draw connections with delay
      connectionsList.forEach((connection) => {
        const sourceNode = nodesList[connection.source];
        const targetNode = nodesList[connection.target];
  
        if (!sourceNode || !targetNode) return;
  
        // Only start drawing connections after 1.5 seconds
        const connectionElapsedTime = Math.max(0, elapsedTime - 1.5);
        const connectionProgress = Math.min(1, connectionElapsedTime / 1);
        
        // Only draw connections when nodes are visible and after delay
        if (sourceNode.opacity > 0 && targetNode.opacity > 0) {
          ctx.beginPath();
          ctx.moveTo(sourceNode.x, sourceNode.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * connectionProgress})`;
          ctx.lineWidth = 0.5 * 5;
          ctx.stroke();
  
          // Draw active connection animation
          if (connection.active) {
            const dx = targetNode.x - sourceNode.x;
            const dy = targetNode.y - sourceNode.y;
            const x = sourceNode.x + dx * connection.progress;
            const y = sourceNode.y + dy * connection.progress;
  
            ctx.beginPath();
            ctx.arc(x, y, 1 * 5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${0.7 * connectionProgress})`;
            ctx.fill();
  
            // Update progress
            connection.progress += connection.speed;
            if (connection.progress >= 1) {
              connection.progress = 0;
              connection.active = Math.random() < 0.7;
            }
          } else if (Math.random() < 0.002) {
            connection.active = true;
            connection.progress = 0;
          }
        }
      });
    };
  
    const animate = () => {
      draw();
      animationId.value = requestAnimationFrame(animate);
    };
  
    // Initialize and start animation
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animationId.value = requestAnimationFrame(animate);
  
    // Cleanup
    onUnmounted(() => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId.value);
    });
  });
  </script>
  
  <style scoped>
  .network-container {
    width: 100%;
    height: 60vh;
    overflow: hidden;
  }
  
  .network-canvas {
    width: 100%;
    height: 100%;
  }
  </style>