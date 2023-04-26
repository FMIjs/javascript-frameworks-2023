import * as d3 from 'd3';

const svg = d3.select('#d3-container');

// Example: Create a simple rectangle using D3
svg.append('rect')
  .attr('x', 10)
  .attr('y', 10)
  .attr('width', 50)
  .attr('height', 50)
  .attr('fill', 'blue');

