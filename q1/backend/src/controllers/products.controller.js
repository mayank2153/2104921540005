import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const getAllProducts = async (company, category, top, minPrice, maxPrice) => {
    try {
        
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MzE3MzgxLCJpYXQiOjE3MTczMTcwODEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ1ZTJjNmRkLTllMjctNGU2Zi05MmIyLWZmNGViZmYwODMxZSIsInN1YiI6Im1zYWNoZGV2YTlhcHJpbEBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJ6b29ta2FydCIsImNsaWVudElEIjoiZDVlMmM2ZGQtOWUyNy00ZTZmLTkyYjItZmY0ZWJmZjA4MzFlIiwiY2xpZW50U2VjcmV0IjoiYnN5eVBFR1lmQWFuc0JKViIsIm93bmVyTmFtZSI6Ik1heWFuayIsIm93bmVyRW1haWwiOiJtc2FjaGRldmE5YXByaWxAZ21haWwuY29tIiwicm9sbE5vIjoiMjEwNDkyMTU0MDAwNSJ9.05O4dv3U12JgoRm8aB2BWeFvAcMMIgzxNreVfTkl3Pg";
        
        const response = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];

const getProductByCategory = async (req, res) => {
    const { category } = req.params;
    const { top = 10, minPrice = 0, maxPrice = Infinity } = req.query;

    try {
        const allProducts = await Promise.all(companies.map(company => 
            getAllProducts(company, category, top, minPrice, maxPrice)
        ));

        // Flatten the array of arrays
        const products = allProducts.flat();

        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ error: 'An error occurred while fetching products.' });
    }
};

export { getProductByCategory,getAllProducts };
