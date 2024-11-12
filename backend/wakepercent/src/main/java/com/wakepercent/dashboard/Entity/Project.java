package com.wakepercent.dashboard.Entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id", "nameKo", "nameEn", "dateOfStart",
        "dateOfEnd", "descriptionKo", "descriptionEn",
        "workKo", "workEn", "skill"
    })
public class Project {
    @Id @GeneratedValue
    @Column(name = "project_id")
    private Long id;

    private String nameKo;
    private String nameEn;

    private LocalDateTime dateOfStart;
    private LocalDateTime dateOfEnd;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String descriptionKo;
    @Column(columnDefinition = "TEXT", nullable = false)
    private String descriptionEn;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String workKo;
    @Column(columnDefinition = "TEXT", nullable = false)
    private String workEn;

    private String skill;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "experience_id")
    private Experience experience;
}
