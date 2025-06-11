package firstspring.com.my_first_spring_boot.service;

import org.springframework.stereotype.Service;

import firstspring.com.my_first_spring_boot.repository.MessageRepository;

@Service
public class MessageService {
    private final MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public String getMessage() {
        return messageRepository.getMessage();
    }
}
