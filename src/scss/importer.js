import fs from 'fs';

function importFiles(filePath, directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading catalog:', err);
            return;
        }

        const dataToWrite = files
            .map(item => "@import url('./" + item + `');`)
            .join('\n') + '\n';

        fs.appendFile(filePath, dataToWrite, err => {
            if (err) {
                console.error('Error writing to file:', err);
                return;
            }
            console.log('List added successfuly to:', filePath);
        });
    });
}

importFiles('./styles.scss', './');
