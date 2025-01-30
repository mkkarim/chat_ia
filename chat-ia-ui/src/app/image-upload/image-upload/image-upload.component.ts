import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-image-upload',
  standalone: false,
  
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css'
})
export class ImageUploadComponent {
  selectedFiles: FileList | null = null;
  uploadProgress: number | null = null;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadImages() {
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < this.selectedFiles.length; i++) {
        formData.append('files', this.selectedFiles[i]);
      }

      this.http.post('http://localhost:8080/api/images/upload', formData, {
        reportProgress: true,
        observe: 'events'
      }).subscribe(
        (event: any) => {
          if (event.loaded && event.total) {
            this.uploadProgress = Math.round((event.loaded / event.total) * 100);
          }
          if (event.body) {
            console.log('Upload successful', event.body);
            this.uploadProgress = null;
            this.snackBar.open('Upload réussi !', 'Fermer', { duration: 3000 });
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Upload failed', error);
          this.uploadProgress = null;
          this.snackBar.open('Échec de l\'upload : ' + error.message, 'Fermer', { duration: 5000 });
        }
      );
    }
  }
}
