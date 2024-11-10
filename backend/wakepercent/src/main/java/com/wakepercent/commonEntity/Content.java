package com.wakepercent.commonEntity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.awt.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
////@ToString
public class Content {

    @Id @GeneratedValue
    @Column(name = "content_id")
    private Long id;

    @Enumerated(EnumType.STRING)
    private ContentType type;

    private String contentKo;

    private String contentEn;

}
