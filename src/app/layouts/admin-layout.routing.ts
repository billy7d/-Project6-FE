import { Routes } from '@angular/router';
import { AddPlaylistComponent } from 'app/action-component/playlist/add-playlist/add-playlist.component';
 
 
import { QuestionComponent } from 'app/action-component/question/question.component';
import { ShowCreatorPlaylistComponent } from 'app/action-component/show-creator-playlist/show-creator-playlist.component';
import { ShowListSongComponent } from 'app/action-component/show-list-song/show-list-song.component';
import { SongCreateComponent } from 'app/action-component/song-create/song-create.component';
import { SongOfUserComponent } from 'app/action-component/song-of-user/song-of-user.component';
import { TableListComponent } from 'app/action-component/table-list/table-list.component';
import { UserProfileComponent } from 'app/action-component/user-profile/user-profile.component';

export const AdminLayoutRoutes: Routes = [ 
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'question',       component: QuestionComponent },
    { path: 'listSong',       component: ShowListSongComponent},
    { path: 'hitSong',        component: QuestionComponent},
    { path: 'createSong',     component: SongCreateComponent},
    { path: 'myListSong', component: SongOfUserComponent},
    { path: 'myPlaylist', component: ShowCreatorPlaylistComponent}
];
