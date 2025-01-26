import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GovApiService } from '../../services/gov-api.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-gov-data',
  templateUrl: './gov-data.component.html',
  styleUrls: ['./gov-data.component.scss'],
})
export class GovDataComponent implements OnInit {
  public isLoading: boolean = true; // For showing loading spinner
  public stateData: any[] = []; // To hold the fetched data

  constructor(private govApiService: GovApiService) {}

  async ngOnInit(): Promise<void> {
    try {
      // Fetch data from the API
      this.stateData = await this.govApiService.fetchData();
      console.log('State Data:', this.stateData); // Log the data to verify it's populated
    } catch (error) {
      console.error('Error fetching state data:', error);
    } finally {
      this.isLoading = false; // Stop the loading spinner
    }
  }
}
