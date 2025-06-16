package firstspring.com.my_first_spring_boot.service;

import firstspring.com.my_first_spring_boot.model.User;
import firstspring.com.my_first_spring_boot.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public User userRegister(String username, String password){
        String passwordEncrypted = passwordEncoder.encode(password);
        User user = new User(username, passwordEncrypted);
        return userRepository.save(user);
    }
    public Optional<User> getUsername(String username){
        return userRepository.findByUsername(username);
    }
}
