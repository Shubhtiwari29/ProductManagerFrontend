import axios from "axios";
const API_URL = "http://localhost:8080/product";

class ProductService {
    saveProduct(product) {
        return axios.post(`${API_URL}/createproduct`, product);}
    getAllProducts() {
        return axios.get(`${API_URL}/getall`);}
    getById(id) {
        return axios.get(`${API_URL}/getproduct/${id}`);}
    deleteById(id) {
        return axios.delete(`${API_URL}/deleteproduct/${id}`);}
    updateProduct(product) {
        return axios.put(`${API_URL}/updateproduct/${product.id}`, product);}
}
export default new ProductService();
