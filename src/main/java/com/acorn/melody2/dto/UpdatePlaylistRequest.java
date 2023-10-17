package com.acorn.melody2.dto;

import com.acorn.melody2.entity.UserAccount;
import lombok.Data;

import java.time.LocalDate;

@Data
public class UpdatePlaylistRequest {
    private Long playlistId;
    private Long userAccountId;
    private String playlistName;
    private String description;
    private LocalDate createdDate;
    private String playlistHashtags;
    private UserAccount userAccount;
}
