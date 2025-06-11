package firstspring.com.my_first_spring_boot.repository;

import org.springframework.stereotype.Repository;

import firstspring.com.my_first_spring_boot.model.Product;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
