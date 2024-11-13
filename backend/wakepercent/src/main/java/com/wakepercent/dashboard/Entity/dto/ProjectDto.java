package com.wakepercent.dashboard.Entity.dto;

import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

@Data
@Getter
public class ProjectDto {
    private Long id;
    private String name;
    private String description;
    private LocalDateTime dateOfStart;
    private LocalDateTime dateOfEnd;
    private String client;
    private String company;
    private String work;
    private String skill;

    public ProjectDto(Long id, String name, String description, LocalDateTime dateOfStart, LocalDateTime dateOfEnd, String client, String company, String work, String skill) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.dateOfStart = dateOfStart;
        this.dateOfEnd = dateOfEnd;
        this.client = client;
        this.company = company;
        this.work = work;
        this.skill = skill;
    }
}
