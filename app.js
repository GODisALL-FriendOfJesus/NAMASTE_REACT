
// this parent was created as anobject while it renders into dom it changes into html tags
const parent=React.createElement('div',{id:'parent'},
    React.createElement('div',{id:'child'},
React.createElement('h1',{},'I am an H1 tag')));


const heading=React.createElement('h1',
    {classname:'h1'},
    'helloworld from react');
    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);
    console.log(parent);
//console.log(heading);