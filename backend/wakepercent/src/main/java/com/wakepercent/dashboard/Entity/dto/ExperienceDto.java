package com.wakepercent.dashboard.Entity.dto;

import lombok.Data;
import lombok.Getter;

import java.time.LocalDateTime;

@Data
@Getter
public class ExperienceDto {
    private String company;
    private String title;
    private String work;
    private String skill;
    private LocalDateTime dateJoin;
    private LocalDateTime dateQuit;

    public ExperienceDto(String company, String title, String work, String skill, LocalDateTime dateJoin, LocalDateTime dateQuit) {
        this.company = company;
        this.title = title;
        this.work = work;
        this.skill = skill;
        this.dateJoin = dateJoin;
        this.dateQuit = dateQuit;
    }
}
