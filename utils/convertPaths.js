const fs = require('fs');
const path = require('path');

function convertPaths(inputFile, outputFile) {
  // Leggi il file di input
  fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) throw err;

    // Analizza i dati JSON
    const report = JSON.parse(data);

    // Modifica i percorsi dei file nel report
    const updatedReport = report.map(issue => {
      const absolutePath = issue.filePath;
      const relativePath = path.relative(__dirname, absolutePath);
      const correctedPath = relativePath.replace('../', '');
      return {
        ...issue,
        filePath: correctedPath,
      };
    });

    // Scrivi il report aggiornato nel file di output
    fs.writeFile(outputFile, JSON.stringify(updatedReport, null, 2), 'utf8', (err) => {
      if (err) throw err;
      console.log('Percorsi dei file convertiti con successo.');
    });
  });
}

// Usa lo script
const inputFile = '../src/eslint_report.json';  // Modifica con il percorso del tuo report ESLint
const outputFile = '../src/updated_eslint_report.json';  // Modifica con il percorso dove desideri salvare il report aggiornato
convertPaths(inputFile, outputFile)
