package com.financevisualization.backend.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
public class UserDto {

    private int userId;
    private String username;
    private String password;
    private double income;
    private String householdName;
}
