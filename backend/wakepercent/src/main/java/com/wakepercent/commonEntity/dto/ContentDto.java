package com.wakepercent.commonEntity.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class ContentDto {
    private String content;

    public ContentDto(String content) {
        this.content = content;
    }
}
