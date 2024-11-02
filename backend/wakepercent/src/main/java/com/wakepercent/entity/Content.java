package com.wakepercent.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
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
    private TextArea content;
}
