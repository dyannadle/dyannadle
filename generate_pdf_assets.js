
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// --- ESM Compatibility for __dirname ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- Configuration ---
const certificatesDir = path.join(__dirname, 'public', 'Certificates');
const resumePath = path.join(__dirname, 'public', 'resume.pdf');
const outputDir = path.join(__dirname, 'src', 'data', 'pdfs');

// --- Mapping: Filename -> Certificate Name ---
const CERTIFICATE_NAME_MAP = {
    "Certified_Software_Tester.pdf": "Certified Software Tester",
    "GenAI_Powered_Data_Analytics.pdf": "GenAI Powered Data Analytics",
    "Google_Associate_Cloud_Engineer.pdf": "Google Associate Cloud Engineer",
    "AWS_Academy_Introduction_to_Cloud.pdf": "AWS Academy Introduction to Cloud",
    "Career_Essentials_in_Generative_AI.pdf": "Career Essentials in Generative AI",
    "Google_AI_Essentials.pdf": "Google AI Essentials",
    "What_is_Generative_AI.pdf": "What is Generative AI?",
    "Data_Manipulation_with_pandas.pdf": "Data Manipulation with pandas",
    "Value_Added_Course_By_SAP.pdf": "Value Added Course By SAP",
    "Joining_Data_in_SQL.pdf": "Joining Data in SQL",
    "Introduction_to_Python.pdf": "Introduction to Python",
    "Android_App_Development.pdf": "Android App Development",
    "Maharashtra_State_Certificate_in_IT.pdf": "Maharashtra State Certificate in IT"
};

// --- Helpers ---
function getBase64(filePath) {
    try {
        const fileBuffer = fs.readFileSync(filePath);
        return `data:application/pdf;base64,${fileBuffer.toString('base64')}`;
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error.message);
        return null;
    }
}

function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

// --- Main Execution ---

// 1. Generate Certificates Map
const certificatesMap = {};
if (fs.existsSync(certificatesDir)) {
    const files = fs.readdirSync(certificatesDir);
    console.log(`Found ${files.length} files in Certificates directory.`);

    files.forEach(file => {
        if (path.extname(file).toLowerCase() === '.pdf') {
            const fullPath = path.join(certificatesDir, file);
            const base64Data = getBase64(fullPath);

            if (base64Data) {
                // Use the mapped name if available, otherwise fallback to filename
                const key = CERTIFICATE_NAME_MAP[file] || file;
                certificatesMap[key] = base64Data;
                console.log(`Processed: ${file} -> Key: "${key}"`);
            }
        }
    });
} else {
    console.warn(`Certificates directory not found at: ${certificatesDir}`);
}

const certificatesContent = `export const CERTIFICATES_MAP: Record<string, string> = ${JSON.stringify(certificatesMap, null, 2)};`;
const certificatesOutputPath = path.join(outputDir, 'certificatesMap.ts');
ensureDirectoryExistence(certificatesOutputPath);
fs.writeFileSync(certificatesOutputPath, certificatesContent);
console.log(`Generated ${certificatesOutputPath}`);

// 2. Generate Resume Base64
const resumeBase64 = getBase64(resumePath);
if (resumeBase64) {
    const resumeContent = `export const RESUME_BASE64 = "${resumeBase64}";`;
    const resumeOutputPath = path.join(outputDir, 'RESUME_BASE64.ts');
    ensureDirectoryExistence(resumeOutputPath);
    fs.writeFileSync(resumeOutputPath, resumeContent);
    console.log(`Generated ${resumeOutputPath}`);
} else {
    console.warn(`Resume not found at: ${resumePath}`);
}
