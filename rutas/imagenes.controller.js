const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '/Privado/imagenes'),
   filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
  });
  
  const upload = multer({ storage: storage });

  exports.upload =  upload.single('imagenes');

  exports.upload = (req, res) => {
    req.getConnection ((err, conn) => {
        if(err) return res.send(err);

        const tipo = req.file.mimeTy;
        const nombre = req.file.originalname;

        conn.query('INSERT INTO'+ req.params.tabla + 'set ?',
        [{tipo, nombre}],
        (err, res) => {
            console.log(
                err
                ? 'Err INSERT INTO'+ req.params.tabla + '' + err
                :req.params.tabla + ': imagen agregada'
            );
            res.json(
              err
                ? { err: "Error al cargar la imagen" }
                : { msg: "Imagen cargada satisfactoriamente" }
            );
         })
    });
};  