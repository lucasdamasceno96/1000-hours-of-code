package firstspring.com.my_first_spring_boot.service;

import firstspring.com.my_first_spring_boot.model.User;
import firstspring.com.my_first_spring_boot.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User.UserBuilder;

@Service
public class AppUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public AppUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Load domain user
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        // Use Spring Security's User builder
        UserBuilder builder = org.springframework.security.core.userdetails.User.withUsername(user.getUsername());
        builder.password(user.getPassword());
        builder.roles("USER"); // You can customize this as needed

        return builder.build();
    }
}
