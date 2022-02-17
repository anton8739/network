package by.yurovski.network.controller;


import by.yurovski.network.dto.UserDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RestController
@RequestMapping("/api/users/")
public class UserController {

    @GetMapping("/all")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        System.out.println("+");
        List<UserDto> userDtoList = new ArrayList<>();
        userDtoList.add(new UserDto(1, "Anton", "Yurovski"));
        userDtoList.add(new UserDto(2, "Pavel", "Ivanov"));
        userDtoList.add(new UserDto(3, "Maks", "Petrov"));
        return  ResponseEntity.ok(userDtoList);
    }

}
