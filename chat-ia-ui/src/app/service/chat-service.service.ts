import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  private apiUrl = 'http://localhost:8080/api';

  async sendMessage(message: any) {
    return (await axios.post(`${this.apiUrl}/messages`, message)).data;
  }

  async getMessages() {
    return (await axios.get(`${this.apiUrl}/messages`)).data;
  }

  async uploadImages(files: File[]) {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));
    return (await axios.post(`${this.apiUrl}/upload`, formData)).data;
  }
}
