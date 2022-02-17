package by.yurovski.network.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {
    int id;
    String userName;
    String userSurname;
}
