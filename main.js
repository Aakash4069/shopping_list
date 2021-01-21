const electron = require('electron');
const url = require('url');
const path = require('path');

const {app,BrowserWindow} = electron;

let mainWindow;

//listen for the app be ready 
app.on('ready',function(){
    
    // create new Window
    mainWindow=new BrowserWindow({

    });

    //loading the html file
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'mainWindow.html'),
        protocol:'file:',
        slashes: true

    }));
   const mainMenu=Manu.buildfromTemplate(mainMenuTemplate);
    
});
const mainMenuTemplate=[
    {
            label:'File'
    }
];