import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api/'
});

// export function getItems() {
//   return apiClient.get('/items/');
// }

// export function createItem(item) {
//   return apiClient.post('/items/', item);
// }

// export function deleteItem(itemId) {
//   return apiClient.delete(`/items/${itemId}/`);
// }
