import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const countries = [
        { id: 11, name: 'France' },
        { id: 12, name: 'Malaysia' },
        { id: 13, name: 'Singapore' },
        { id: 14, name: 'Dubai' },
        { id: 15, name: 'Thailand' },
        { id: 16, name: 'New Zealand' },
        { id: 17, name: 'England' },
        { id: 18, name: 'Indonesia' },
        { id: 19, name: 'Australia' },
        { id: 20, name: 'Canada' }
    ];
    return {countries};
  }
}