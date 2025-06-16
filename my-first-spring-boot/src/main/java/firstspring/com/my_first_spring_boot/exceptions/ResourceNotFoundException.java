package firstspring.com.my_first_spring_boot.exceptions;

public class ResourceNotFoundException  extends RuntimeException {
    public ResourceNotFoundException( String message){
        super(message);
    }
}
