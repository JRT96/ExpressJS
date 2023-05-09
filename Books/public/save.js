function saveData(req, res) {
    const form = formidable();
    form.parse(req, function (err, fields, files) {
        if (err) throw err;
        let rowData = {
            title: fields.title,
            author: fields.author,
            image: FileSystem.readFileSync(files.image.filepath),
            description: fields.description,
        };
        let sqlCmd = 'INSERT INTO BookTable SET ?';
        conn.query(sqlCmd, rowData, (err, result) => {
            if (err) throw error;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end();
        })
    })
};