// Import Necesarios
import { ModuleWithProviders } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";

// Importar compoNeNtes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from "./components/register/register.component";
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

// Defiir las rutas
const appRouters: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: '**', component: ErrorComponent},
];


// Exportar cofiguracio
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRouters);