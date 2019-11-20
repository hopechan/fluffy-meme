import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  public createData(data: any) {
    return this.firestore.collection('data').add(data);
  }

  public getData(documentId: string) {
    return this.firestore.collection('data').doc(documentId).snapshotChanges();
  }

  public getAll() {
    return this.firestore.collection('data').snapshotChanges();
  }

  public updateData(documentId: string, data: any) {
    return this.firestore.collection('data').doc(documentId).set(data);
  }

  public deleteData(documentId: string) {
    return this.firestore.collection('data').doc(documentId).delete();
  }
}