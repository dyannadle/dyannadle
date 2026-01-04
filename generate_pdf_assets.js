import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');
const DATA_DIR = path.join(__dirname, 'src/data/pdfs');

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper to process a file
const processFile = (filePath, outputName) => {
    try {
        const fileBuffer = fs.readFileSync(filePath);
        const base64 = fileBuffer.toString('base64');
        const content = `export const ${outputName} = "data:application/pdf;base64,${base64}";`;

        // Create safe filename
        const safeFileName = outputName + '.ts';
        fs.writeFileSync(path.join(DATA_DIR, safeFileName), content);
        console.log(`Generated ${safeFileName} (${(fileBuffer.length / 1024).toFixed(2)} KB)`);
    } catch (err) {
        console.error(`Error processing ${filePath}:`, err);
    }
};

// 1. Process Resume
const resumePath = path.join(PUBLIC_DIR, 'resume.pdf');
if (fs.existsSync(resumePath)) {
    processFile(resumePath, 'RESUME_BASE64');
}

// 2. Process Certificates
const certsDir = path.join(PUBLIC_DIR, 'Certificates');
if (fs.existsSync(certsDir)) {
    const files = fs.readdirSync(certsDir);
    const certMap = {};

    files.forEach(file => {
        if (file.toLowerCase().endsWith('.pdf')) {
            // Create a variable name from filename
            // e.g., "Certified_Software_Tester.pdf" -> "CERT_Certified_Software_Tester"
            const varName = 'CERT_' + file.replace(/\.pdf$/i, '').replace(/[^a-zA-Z0-9_]/g, '_');
            const inputPath = path.join(certsDir, file);

            // We will put all certs in one mapping file or individual? 
            // Individual is better for code splitting, but mapping is easier for consumption.
            // Let's create a huge map for now, or just individual files.
            // Let's do a single file for certifications to keep it simple for the import map.
            // Wait, individual files allow dynamic imports.

            const fileBuffer = fs.readFileSync(inputPath);
            const base64 = fileBuffer.toString('base64');
            certMap[file] = `data:application/pdf;base64,${base64}`;
        }
    });

    // Write a single map file for certs (lazy loaded logic will be needed in app)
    // Actually, let's write them to a big object in `certificatesMap.ts`
    // It might be large, but it solves the IDM issue 100%.

    const mapContent = `export const CERTIFICATES_MAP: Record<string, string> = ${JSON.stringify(certMap, null, 2)};`;
    fs.writeFileSync(path.join(DATA_DIR, 'certificatesMap.ts'), mapContent);
    console.log(`Generated certificatesMap.ts with ${Object.keys(certMap).length} certificates.`);
}
