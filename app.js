function updateRoute(){
    const path=window.location.pathname;
    const route=routes[path];
    if(!route) navigate('/error');
    const template=document.getElementById(route.templateId);
    const app=document.getElementById("app");
    const view=template.content.cloneNode(true);//creating a copy of the template content
    app.innerHTML='';
    app.appendChild(view);
    document.title=route.title;
    console.log(`${route.title} is shown`)
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
        templateId:'login',
        title:'Login'
    },
    '/dashboard':{
        templateId:'dashboard',
        title:'Dashboard'
    },
    '/error':{
        templateId:'error',
        title:'Error'
    },
    '/credits':{
        templateId:'credits',
        title:'Credits'
    }
    
}
// call the updateRoute() each time the history changes
window.onpopstate = () => updateRoute();
// change template based on a path
updateRoute();

async function register(){
    const form=document.getElementById("registerForm");
    const formData=new FormData(form);
    const data=Object.fromEntries(formData);
    const jsonData=JSON.stringify(data);
    const result= await createAccount(jsonData);
    if (result.error) {
        return console.log('An error occurred:', result.error);
    }
    console.log('Account created!', result);
}

async function createAccount(account) {
    try {
      const response = await fetch('//localhost:5000/api/accounts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: account
      });
      return await response.json();
    } catch (error) {
      return { error: error.message || 'Unknown error' };
    }
  }