const fs = require('fs');
const path = require('path');

const dir = process.cwd();
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // 1. Add bg-transparent to body
    if (!content.includes('bg-transparent"')) {
        content = content.replace(/<body class="([^"]+)"/g, '<body class="$1 bg-transparent"');
    }

    // 2. Add canvas after body
    if (!content.includes('id="spline-background"')) {
        content = content.replace(/(<body[^>]*>)/, '$1\n<canvas id="spline-background" class="fixed inset-0 w-full h-full -z-10 object-cover"></canvas>');
    }

    // 3. Add script before </body>
    if (!content.includes('bgSpline.load')) {
        const scriptBlock = `
<script type="module">
  import { Application } from 'https://esm.sh/@splinetool/runtime';
  const bgCanvas = document.getElementById('spline-background');
  if (bgCanvas) {
    const bgSpline = new Application(bgCanvas);
    bgSpline.load('https://prod.spline.design/HK25s1Zuyr9d3CV7/scene.splinecode');
  }
</script>
</body>`;
        content = content.replace(/<\/body>/, scriptBlock);
    }

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log('Spline background added to all pages except index.html!');
