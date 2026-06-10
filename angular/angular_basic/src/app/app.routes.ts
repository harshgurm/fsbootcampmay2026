import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';
import { User } from './user/user';
import { Students } from './students/students';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: 'sign-in',
        component: SignIn
    }, 
    {
        path: 'sign-up',
        component: SignUp
    },
    {
        path: 'user',
        component: User
    },
    {
        path: 'student',
        component: Students
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        //Another way to add component is by using loadComponent(this is used for lazy loading)
        loadComponent: () => import('./pagenotfound/pagenotfound').then(m => m.Pagenotfound)
    },

    // 3 mins
    // if i add 'home' in the url
    // it should redirect to home component.
    
];
