function updateRoute(){
    const path=window.location.pathname;
    const route=routes[path];
    const template=document.getElementById(route.templateId);
    const app=document.getElementById("app");
    const view=template.content.cloneNode(true);//creating a copy of the template content
    app.innerHTML='';
    app.appendChild(view);
}

const routes={
    '/login':{
        templateId:'login'
    },
    '/dashboard':{
        templateId:'dashboard'
    }
    
}
updateRoute();
