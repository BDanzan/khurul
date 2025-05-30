import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { NewsComponent } from '../pages/home/news/news.component';
import { NewsDetailComponent } from '../pages/home/news/news-detail/news-detail.component';
import { MaterialComponent } from '../pages/home/material/material.component';
import { EventsComponent } from '../pages/home/events/events.component';
import { ContactsComponent } from '../pages/home/contacts/contacts.component';
import { LibraryComponent } from '../pages/library/library.component';
import { LibraryNewsComponent } from '../pages/library/news/library-news.component';
import { LibraryBooksComponent } from '../pages/library/books/library-books.component';
import { LibraryBookDetailComponent } from '../pages/library/books/books-detail/library-book-detail.component';
import { LibraryAuthorsComponent } from '../pages/library/authors/library-authors.component';
import { LibraryAuthorDetailComponent } from '../pages/library/authors/authors-detail/library-author-detail.component';
import { LibraryScheduleComponent } from '../pages/library/schedule/library-schedule.component';
import { LibraryContactsComponent } from '../pages/library/contacts/library-contacts.component';
import { MuseumComponent } from '../pages/museum/museum.component';
import { MuseumNewsComponent } from '../pages/museum/news/museum-news.component';
import { MuseumScheduleComponent } from '../pages/museum/schedule/museum-schedule.component';
import { MuseumContactsComponent } from '../pages/museum/contacts/museum-contacts.component';
import { AdminComponent } from '../pages/admin/admin.component';

/**
 * Маршруты приложения
 */
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:newsId', component: NewsDetailComponent },
  { path: 'material', component: MaterialComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contacts', component: ContactsComponent },
  {
    path: 'library',
    children: [
      { path: '', component: LibraryComponent },
      { path: 'news', component: LibraryNewsComponent },
      { path: 'books', component: LibraryBooksComponent },
      { path: 'books/:bookId', component: LibraryBookDetailComponent },
      { path: 'authors', component: LibraryAuthorsComponent },
      { path: 'authors/:authorId', component: LibraryAuthorDetailComponent },
      { path: 'schedule', component: LibraryScheduleComponent },
      { path: 'contacts', component: LibraryContactsComponent }
    ]
  },
  {
    path: 'museum',
    children: [
      { path: '', component: MuseumComponent },
      { path: 'news', component: MuseumNewsComponent },
      { path: 'schedule', component: MuseumScheduleComponent },
      { path: 'contacts', component: MuseumContactsComponent }
    ]
  },
  { path: 'admin', component: AdminComponent }
];
