const fs = require('fs');
const path = require('path');

const dir = process.cwd();
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Replace SkillSwap links (Brand)
    content = content.replace(/<a ([^>]+) href="#">\s*SkillSwap\s*<\/a>/g, '<a $1 href="index.html">SkillSwap</a>');
    
    // Replace Browse links
    content = content.replace(/<a ([^>]+) href="#">\s*Browse\s*<\/a>/g, '<a $1 href="browse-services.html">Browse</a>');
    
    // Replace Post a Job links
    content = content.replace(/<a ([^>]+) href="#">\s*Post a Job\s*<\/a>/g, '<a $1 href="post-job.html">Post a Job</a>');
    
    // Replace Dashboard links
    content = content.replace(/<a ([^>]+) href="#">\s*Dashboard\s*<\/a>/g, '<a $1 href="dashboard.html">Dashboard</a>');

    // Replace Find a Professional footer links
    content = content.replace(/<a ([^>]+) href="#">\s*Find a Professional\s*<\/a>/g, '<a $1 href="browse-services.html">Find a Professional</a>');

    // Replace Home / logo links if any
    content = content.replace(/<div ([^>]+)>\s*SkillSwap\s*<\/div>/g, '<a $1 href="index.html">SkillSwap</a>');

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log('Links updated!');
