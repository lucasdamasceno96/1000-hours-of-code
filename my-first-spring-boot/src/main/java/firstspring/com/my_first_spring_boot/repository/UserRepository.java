package firstspring.com.my_first_spring_boot.repository;

import firstspring.com.my_first_spring_boot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    }
