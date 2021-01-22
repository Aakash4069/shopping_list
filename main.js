const electron = require('electron');
const url = require('url');
const path = require('path');

const {app,BrowserWindow,Menu} = electron;

let mainWindow;

//listen for the app be ready 
app.on('ready',function(){
    
    // create new Window
    mainWindow=new BrowserWindow({
        webPreferences: {
            // nodeIntegration: false, // is default value after Electron v5
            contextIsolation: true, // protect against prototype pollution
        
          }
    });

    //loading the html file
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'mainWindow.html'),
        protocol:'file:',
        slashes: true

    }));
   const mainMenu=Menu.buildfromTemplate(mainMenuTemplate);
   Menu.setApplicationsMenu(mainMenu);
    
});
const mainMenuTemplate=[
    {
            label:'File'
    }
]; 