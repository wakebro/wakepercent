package com.wakepercent.dashboard.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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
}
