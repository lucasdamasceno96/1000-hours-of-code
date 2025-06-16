package firstspring.com.my_first_spring_boot.controller;

import firstspring.com.my_first_spring_boot.model.User;
import firstspring.com.my_first_spring_boot.security.JwtUtil;
import firstspring.com.my_first_spring_boot.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> request){
       User user = userService.userRegister(request.get("username"), "password");
       return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request){
        Optional<User> user = userService.getUsername(request.get("username"));
        if(user.isPresent() && user.get().getPassword().equals(request.get("password"))){
            String token = JwtUtil.generateToken(user.get().getUsername());
            return ResponseEntity.ok(Map.of("token", token));
        }
        return ResponseEntity.status(401).body("Invalid Credentials!");
    }
}
