import { projects, filters } from './src/data/projectsData';
import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');

console.log('Checking filters...');
filters.forEach(filter => {
    if (filter === 'All') return;
    if (filter === 'Favorites') return; // Dynamic
    const count = projects.filter(p => p.category.includes(filter)).length;
    console.log(`Filter "${filter}": ${count} projects`);
    if (count === 0) {
        console.warn(`WARNING: Filter "${filter}" has no matching projects!`);
    }
});

console.log('\nChecking images...');
projects.forEach(p => {
    const imgPath = path.join(publicDir, p.image);
    if (!fs.existsSync(imgPath)) {
        console.error(`ERROR: Image not found for project "${p.title}": ${p.image}`);
    } else {
        console.log(`OK: ${p.image}`);
    }
});
