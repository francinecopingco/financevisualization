package com.financevisualization.backend.controllers;

import com.financevisualization.backend.converter.UserConverter;
import com.financevisualization.backend.dto.UserDto;
import com.financevisualization.backend.model.Users;
import com.financevisualization.backend.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class UserController {

    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private UserConverter userConverter;

    @GetMapping("/users")
    public List<UserDto> getAllUsers(){
        List<UserDto> allUsersDto = usersRepository.findAll().stream().filter(user -> user!=null).map(users ->  userConverter.convert(users)).collect(Collectors.toList());
        return allUsersDto;
    }
}
