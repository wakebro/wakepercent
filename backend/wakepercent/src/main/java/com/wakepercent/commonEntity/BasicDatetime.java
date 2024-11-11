package com.wakepercent.commonEntity;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class BasicDatetime {
    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createDate;

    @CreatedBy
    @Column(updatable = false)
    private String createBy;
}
