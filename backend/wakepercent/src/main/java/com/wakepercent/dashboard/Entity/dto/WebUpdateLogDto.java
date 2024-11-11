package com.wakepercent.dashboard.Entity.dto;

import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

@Data
@Getter
public class WebUpdateLogDto {
    private String title;
    private String content;
    private LocalDateTime createDate;

    public WebUpdateLogDto(String title, String content, LocalDateTime createDate) {
        this.title = title;
        this.content = content;
        this.createDate = createDate;
    }
}
