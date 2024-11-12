package com.wakepercent.dashboard.Entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id", "companyKo", "companyEn", "dateJoin", "dateQuit",
        "titleKo", "titleEn", "workKo", "workEn", "skill"
    })
public class Experience {
    @Id @GeneratedValue
    @Column(name = "experience_id")
    private Long id;

    private String companyKo;
    private String companyEn;

    private LocalDateTime dateJoin;
    private LocalDateTime dateQuit;

    private String titleKo;
    private String titleEn;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String workKo;
    @Column(columnDefinition = "TEXT", nullable = false)
    private String workEn;

    private String skill;

    @OneToMany(mappedBy = "experience")
    private List<Project> projects = new ArrayList<>();
}
