import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class GovApiService {
  private apiUrl = 'http://localhost:8080/api/data';

  constructor() {}

  async fetchData(): Promise<any[]> {
    try {
      const response = await axios.get(this.apiUrl);
      console.log('API Response:', response.data); // Ensure this logs correctly
      return Array.isArray(response.data) ? response.data : []; // Return empty array if not an array
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
}
