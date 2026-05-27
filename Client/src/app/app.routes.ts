import { Routes } from '@angular/router';
import { AddTask } from './add-task/add-task';
import { Diary } from './diary/diary';
import { LogIn } from './log-in/log-in';
import { MoreDetails } from './more-details/more-details';
import { NavBar } from './nav-bar/nav-bar';
import { SignUp } from './sign-up/sign-up';
import { TypeTaskList } from './type-task-list/type-task-list';
import { TaskList } from './tasks-list/tasks-list';
import { About } from './about/about';

export const routes: Routes = [
{path:'addTask', component:AddTask},
{path:'diary', component:Diary},
{path:'logIn', component:LogIn},
{path:'moreDetails', component:MoreDetails},
{path:'navBar', component:NavBar},
{path:'signUp', component:SignUp},
{path:'tasksList', component:TaskList},
{path:'about', component:About},
{path:'tyeTaskList', component:TypeTaskList},
{ path: '', redirectTo: 'about', pathMatch: 'full' }



];
