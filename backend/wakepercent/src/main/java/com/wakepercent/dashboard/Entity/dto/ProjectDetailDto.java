package com.wakepercent.dashboard.Entity.dto;

import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;
@Data
@Getter
public class ProjectDetailDto {
    private Long id;
    private String name;
    private String description;
    private LocalDateTime dateOfStart;
    private LocalDateTime dateOfEnd;
    private String workDetail;
    private String skill;

    public ProjectDetailDto(Long id, String name, String description, LocalDateTime dateOfStart, LocalDateTime dateOfEnd, String workDetail, String skill) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.dateOfStart = dateOfStart;
        this.dateOfEnd = dateOfEnd;
        this.workDetail = workDetail;
        this.skill = skill;
    }
}
