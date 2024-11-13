package com.wakepercent.dashboard.Entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id", "workDetailKo", "workDetailEn"})
public class ProjectDetail {
    @Id @GeneratedValue
    @Column(name = "project_detail_id")
    private Long id;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String workDetailKo;
    @Column(columnDefinition = "TEXT", nullable = false)
    private String workDetailEn;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id")
    private Project project;
}
