import { lazy } from "react";


const Emails =lazy(()=>import("../component/Emails")) ;
const Main = lazy(()=>import ("../pages/Main"));
const ViewEmail = lazy(()=>import ("../component/ViewEmail"));


const routes={
    main:{
        path:'/',
        element: Main
    },
    emails:{
        path:'/emails',
        element:Emails
    },
    view:{
        path:'/view',
        element:ViewEmail
    },
    invalid:{
        path:'/*',
        element:Emails
    }, 
    
}

export { routes };
