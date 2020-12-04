import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing'; 
 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { UserProfileComponent } from 'app/action-component/user-profile/user-profile.component';
import { TableListComponent } from 'app/action-component/table-list/table-list.component';
import { IconsComponent } from 'app/icons/icons.component';
import { QuestionComponent } from 'app/action-component/question/question.component';
import { ShowListSongComponent } from 'app/action-component/show-list-song/show-list-song.component';
import { SongCreateComponent } from 'app/action-component/song-create/song-create.component';
import { AddPlaylistComponent } from 'app/action-component/playlist/add-playlist/add-playlist.component';
import { ShowCreatorPlaylistComponent } from 'app/action-component/show-creator-playlist/show-creator-playlist.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [ 
    UserProfileComponent,
    TableListComponent,
    IconsComponent,
    QuestionComponent,
    ShowListSongComponent,
    SongCreateComponent,
    AddPlaylistComponent,
    ShowCreatorPlaylistComponent
  ]
})

export class AdminLayoutModule {}
