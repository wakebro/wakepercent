package com.wakepercent.dashboard;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.wakepercent.commonEntity.Content;
import com.wakepercent.commonEntity.ContentType;
import com.wakepercent.dashboard.Entity.dto.WebUpdateLogDto;
import com.wakepercent.dashboard.RepositoryCustom.IntroduceRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IntroduceRepository extends JpaRepository<Content, Long>, IntroduceRepositoryCustom {
}
