const electron = require('electron');
const url = require('url');
const path = require('path');
const { createPublicKey } = require('crypto');

const {app,BrowserWindow,Menu} = electron;

let mainWindow;
let addWindow; 

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
        // protocol:'file:',
        // slashes: true,
        // pathname: path.join(__dirname,'mainWindow.html'
        protocol: 'https',
        hostname: 'mainWindow.html',
        pathname: 'path.join(__dirname,'mainWindow.html'
        
        
    }));
   const mainMenu=Menu.buildFromTemplate(mainMenuTemplate);
   //insert the menu
   Menu.setApplicationMenu(mainMenu);
    
});

//handle creating add Window
function createAddWindow(){

    addWindow=new BrowserWindow({
        wigth:200,
        height: 300,
        title:'Add Shoping list Items'
    })

    addWindow=loadURL(url.format())

}

const mainMenuTemplate=[
    {
            label:'File',
            submenu:[
                {
                    label: 'Add Iteam',
                    click(){
                        createAddWindow();
                    }
                },
                {
                    lable:'Clear Iteam'
                },{
                    lable:'Quit',
                    accelerator: process.platform=='linux' ? 'commands+q':'ctrl+Q',
                    click(){
                        app.quit();
                    }
                }
            ]
    }
]; 