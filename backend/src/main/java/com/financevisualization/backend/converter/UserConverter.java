package com.financevisualization.backend.converter;

import com.financevisualization.backend.dto.UserDto;
import com.financevisualization.backend.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserConverter {
    @Autowired
    private Users user;
    @Autowired
    private UserDto userDto;

    //Convert Dto to Model
    public Users convert(UserDto userDto)
    {
        user.setUserId(userDto.getUserId());
        user.setUsername(userDto.getUsername());
        user.setPassword(userDto.getPassword());
        user.setIncome(userDto.getIncome());
        user.setHouseholdName(userDto.getHouseholdName());

        return user;
    }

    //Convert Model to Dto
    public UserDto convert(Users users)
    {
            userDto.setUserId(users.getUserId());
            userDto.setUsername(users.getUsername());
            userDto.setPassword(users.getPassword());
            userDto.setIncome(users.getIncome());
            userDto.setHouseholdName(users.getHouseholdName());
            return userDto;
    }
}
