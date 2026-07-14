const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'services.html', 'gallery.html', 'contact.html'];
const dir = 'd:/project/printing/printingcode/printing-services-website';

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace exact span version first
    content = content.replace(/Elite<span>Print<\/span>/g, 'Andavar<span>Traders</span>');
    // Replace normal Title case
    content = content.replace(/ElitePrint/g, 'Andavar Traders');
    // Replace lowercase
    content = content.replace(/eliteprint/g, 'andavartraders');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
