import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

// ** Read  contact
  getContacts (): Observable<Contact[]> {
    return this.http.get<Contact[]>('https://capg-492aa.firebaseio.com/contact.json')
      .pipe(
        tap(data => data),
        catchError(this.handleError('getContacts', []))
      );
  }

  // Read one contact
  getContactByKey(key: string): Observable<Contact[]>{
    console.log('https://capg-492aa.firebaseio.com/contact/'+key+'.json');
    return this.http.get<Contact[]>('https://capg-492aa.firebaseio.com/contact/'+key+'.json')
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError('getContactByKey', []))
      );
  }

  // POST :  Add a contact
  addContact(contact: Contact): Observable<Contact> {
    const url = 'https://capg-492aa.firebaseio.com/contact.json';
    return this.http.post<Contact>(url, contact, {responseType: 'json'}).pipe(
      tap((product: Contact) => console.log('contact added')),
      catchError(this.handleError<Contact>('addContact'))
    );
  }


  // PUT :  Edit a contact
  editContact(contact: Contact, key: string): Observable<Contact> {
    const url = 'https://capg-492aa.firebaseio.com/contact/'+key+'.json';
    return this.http.put<Contact>(url, contact, {responseType: 'json'}).pipe(
      tap((product: Contact) => console.log('contact edited')),
      catchError(this.handleError<Contact>('editContact'))
    );
  }

  /** DELETE: delete one contact */
  deleteContact(key: string): Observable<Contact>{
    const url = 'https://capg-492aa.firebaseio.com/contact/'+key+'.json';
    return this.http.delete<Contact>(url)
      .pipe(
        tap(data=>data),
        catchError(this.handleError<Contact>('deleteContact'))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log('${operation} failed: ${error.message}');

      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}
