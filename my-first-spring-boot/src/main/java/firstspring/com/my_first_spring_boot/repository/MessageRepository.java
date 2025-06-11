package firstspring.com.my_first_spring_boot.repository;

import org.springframework.stereotype.Repository;

@Repository
public class MessageRepository {

    public String getMessage() {
        return "Hello from MessageRepository";
    }
}
