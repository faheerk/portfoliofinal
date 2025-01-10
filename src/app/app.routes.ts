import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProjectsComponent } from './components/projects/projects.component';


export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'experience', component: ExperienceComponent
    },
    {
        path:'skills', component: SkillsComponent
    },
    {
        path: 'gallery', component: GalleryComponent
    },
    {
        path: 'projects', component: ProjectsComponent
    },
];
