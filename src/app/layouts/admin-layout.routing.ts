import { Routes } from '@angular/router';
 
 
import { QuestionComponent } from 'app/question/question.component';
import { TableListComponent } from 'app/table-list/table-list.component';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';

export const AdminLayoutRoutes: Routes = [ 
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'question',     component: QuestionComponent }
];
