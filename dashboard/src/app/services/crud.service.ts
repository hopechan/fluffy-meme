import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  public createCat(data: any) {
    return this.firestore.collection('data').add(data);
  }

  public getCat(documentId: string) {
    return this.firestore.collection('data').doc(documentId).snapshotChanges();
  }

  public getCats() {
    return this.firestore.collection('data').snapshotChanges();
  }

  public updateCat(documentId: string, data: any) {
    return this.firestore.collection('data').doc(documentId).set(data);
  }

  public deleteCat(documentId: string) {
    return this.firestore.collection('data').doc(documentId).delete();
  }
}