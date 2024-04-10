function updateRoute(){
    const path=window.location.pathname;
    const route=routes[path];
    if(!route) navigate('/error');
    const template=document.getElementById(route.templateId);
    const app=document.getElementById("app");
    const view=template.content.cloneNode(true);//creating a copy of the template content
    app.innerHTML='';
    app.appendChild(view);
}
function navigate(path){
    history.pushState({},path,path);//change url
    updateRoute(path);
}
function handleLinks(event){
    event.preventDefault();
    navigate(event.target.pathname)
}
const routes={
    '/login':{
        templateId:'login'
    },
    '/dashboard':{
        templateId:'dashboard'
    },
    '/error':{
        templateId:'error'
    }
    
}
// call the updateRoute() each time the history changes
window.onpopstate = () => updateRoute();
// change template based on a path
updateRoute();
