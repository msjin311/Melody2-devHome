package com.acorn.melody2.dto;

import com.acorn.melody2.entity.Playlist;
import com.acorn.melody2.entity.UserAccount;
import lombok.Data;

@Data
public class UpdatePlaylistRequest {
//    private Long playlistId;
//    private Long userAccountId;
//    private String playlistName;
//    private String description;
//    private java.sql.Date createdDate;
//    private String playlistHashtags;
    private Playlist playlist;
    private UserAccount userAccount;
}
