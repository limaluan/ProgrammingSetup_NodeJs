const { exec } = require("child_process");

// Abre o Notion ( Caso haja uma mudança de computador ou local de instalação, o caminho deve ser alterado!!!)
exec("start C:/Users/RexBo/AppData/Local/Programs/Notion/Notion", (err, stdout, stderr) => {
    if (err) {
        return console.log(`error: ${error.message}`);
    }
    if (stderr) {
        return console.log(`error: ${stderr}`)
    }
    console.log(stdout);
})

// Inicia o Brave ( navegador )
exec("start brave", (err, stdout, stderr) => {
    if (err) {
        return console.log(`error: ${error.message}`);
    }
    if (stderr) {
        return console.log(`error: ${stderr}`)
    }
    console.log(stdout);
})

// Inicia o Spotify
exec("start spotify", (err, stdout, stderr) => {
    if (err) {
        return console.log(`error: ${error.message}`);
    }
    if (stderr) {
        return console.log(`error: ${stderr}`)
    }
    console.log(stdout);
})

// Inicia o VsCode
exec("code", (err, stdout, stderr) => {
    if (err) {
        return console.log(`error: ${error.message}`);
    }
    if (stderr) {
        return console.log(`error: ${stderr}`)
    }
    console.log(`Setup montado com Sucesso!`);
})
