import { ChatServiceService } from './../../service/chat-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-chat',
  standalone: false,
  
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  newMessage: string = '';
  messages: any[] = [];
  selectedFiles: File[] = [];

  // Ajouter un message au chat
  sendMessage() {
    if (this.newMessage || this.selectedFiles.length) {
      const message = {
        sender: 'Utilisateur',
        text: this.newMessage,
        imageUrl: this.selectedFiles.length ? URL.createObjectURL(this.selectedFiles[0]) : ''
      };
      this.messages.push(message);

      // Réinitialiser les champs après envoi
      this.newMessage = '';
      this.selectedFiles = [];
    }
  }

  // Gérer la sélection de fichiers pour l'upload
  onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedFiles = Array.from(files);
    }
  }
}
