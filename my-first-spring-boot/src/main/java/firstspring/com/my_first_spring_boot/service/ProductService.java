package firstspring.com.my_first_spring_boot.service;

import java.lang.foreign.Linker.Option;
import java.util.List;
import java.util.Optional;

import firstspring.com.my_first_spring_boot.exceptions.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import firstspring.com.my_first_spring_boot.model.Product;
import firstspring.com.my_first_spring_boot.repository.ProductRepository;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not found by id"));
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)){
            throw new ResourceNotFoundException("Product not found by ID");
        }
        productRepository.deleteById(id);
    }
}
