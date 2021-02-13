const electron = require('electron');
const url = require('url');
const path = require('path');
const { createPublicKey } = require('crypto'); //

const {app,BrowserWindow} = electron;
const {Menu}=require('electron').Menu;
// const {Menu} = require('electron').remote;

let mainWindow;
let addWindow; 

//listen for the app be ready 
app.on('ready',function(){
    
    

    // create new Window
    mainWindow=new BrowserWindow({
        webPreferences: {
            nodeIntegration: true, // is default value after Electron v5
            contextIsolation: true, // protect against prototype pollution
            enableRemoteModule: true
        
        }
    });

    //loading the html file 
    //    mainWindow.loadURL(url.format({
    //         protocol:'file:',
    //         slashes: true,
    //         pathname: path.join(__dirname,'mainWindow.html'),

    //     }));
    // mainWindow.loadURL(`file://${__dirname}/mainWindow.html`);

    mainWindow.loadURL('file://' + __dirname + '/mainWindow.html');
    //Quit app when closed
    mainWindow.on('closed',function(){
        app.quit();
    })
    // build menu from template
   const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
   //insert the menu  
   
   Menu.setApplicationMenu(mainMenu);
    
});

//handle creating add Window
function createAddWindow(){

    addWindow=new BrowserWindow({
        wigth:  300,
        height: 200,
        title:'Add Shoping list Items'
    })

    // addWindow.loadURL(url.format({
    //     protocol:'file:',
    //     slashes: true,
    //     pathname: path.join(__dirname,'addWindow.html'),
    // }));
    addWindow.loadURL(`file://${__dirname}/addWindow.html`);  // new method of loadURL
    // for garbage collector
    addWindow.on('closed',function(){
        addwindow==null;
    })

}

// creat manu template 
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
                    accelerator: process.platform=='linux' ? 'commands+q':'Ctrl+alt+t',
                    click(){
                        app.quit();
                    }
                }
            ]
    }
]; 

// add develeper tools
if(process.env.NODE_ENV !== 'productions'){
    mainMenuTemplate.push({
        lable: 'Developer Tools',
        submenu:[
            {
                label:'Toggle DevTools',
                accelerator: process.platform=='darwin'?'command+I':'Ctrl+alt+t',
                click(item,focusWindow){
                    focusWindow.toggleDevtools();
                }
            },
            {
                role:'reload'
            }
        ]
    })
}