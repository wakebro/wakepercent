package com.wakepercent.dashboard.Entity;

import com.wakepercent.commonEntity.BasicDatetime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class WebUpdateLog extends BasicDatetime {
    @Id @GeneratedValue
    @Column(name = "log_id")
    private Long id;
    private  String titleKo;
    private String contentKo;
    private  String titleEn;
    private String contentEn;
}
