package com.wakepercent.dashboard.RepositoryCustom;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.wakepercent.commonEntity.ContentType;
import com.wakepercent.commonEntity.dto.ContentDto;
import com.wakepercent.dashboard.Entity.QExperience;
import com.wakepercent.dashboard.Entity.QWebUpdateLog;
import com.wakepercent.dashboard.Entity.dto.ExperienceDto;
import com.wakepercent.dashboard.Entity.dto.ProjectDto;
import com.wakepercent.dashboard.Entity.dto.WebUpdateLogDto;
import jakarta.persistence.EntityManager;

import java.util.List;

import static com.wakepercent.commonEntity.QContent.content;
import static com.wakepercent.dashboard.Entity.QWebUpdateLog.webUpdateLog;
import static com.wakepercent.dashboard.Entity.QExperience.experience;
import static com.wakepercent.dashboard.Entity.QProject.project;
import static org.springframework.util.StringUtils.hasText;


public class IntroduceRepositoryImpl implements IntroduceRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    public IntroduceRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<ContentDto> findByContentType(ContentType contentType, String lang) {
        return queryFactory
                .select(Projections.constructor(ContentDto.class,
                    lang.equalsIgnoreCase("ko") ? content.contentKo : content.contentEn
                ))
                .from(content)
                .where(contentTypeEq(contentType))
                .fetch();
    }

    private BooleanExpression contentTypeEq(ContentType contentType) {
        return hasText(contentType.toString()) ? content.contentType.eq(contentType) : null;
    }

    @Override
    public List<WebUpdateLogDto> findWebUpdateLog(String lang) {
        return queryFactory
                .select(Projections.constructor(WebUpdateLogDto.class,
                        lang.equalsIgnoreCase("ko") ? webUpdateLog.titleKo : webUpdateLog.titleEn,
                        lang.equalsIgnoreCase("ko") ? webUpdateLog.contentKo : webUpdateLog.contentEn,
                        webUpdateLog.createDate
                ))
                .from(webUpdateLog)
                .orderBy(webUpdateLog.createDate.desc())
                .fetch();
    }

    @Override
    public List<ExperienceDto> findExperiences(String lang) {
        return queryFactory
                .select(Projections.constructor(ExperienceDto.class,
                        lang.equalsIgnoreCase("ko") ? experience.companyKo : experience.companyEn,
                        lang.equalsIgnoreCase("ko") ? experience.titleKo : experience.titleEn,
                        lang.equalsIgnoreCase("ko") ? experience.workKo : experience.workEn,
                        experience.skill,
                        experience.dateJoin,
                        experience.dateQuit
                ))
                .from(experience)
                .orderBy(experience.dateJoin.desc())
                .fetch();
    }

    @Override
    public List<ProjectDto> findProjects(String lang) {
        return queryFactory
                .select(Projections.constructor(ProjectDto.class,
                        project.id,
                        lang.equalsIgnoreCase("ko") ? project.nameKo : project.nameEn,
                        lang.equalsIgnoreCase("ko") ? project.descriptionKo : project.descriptionEn,
                        project.dateOfStart,
                        project.dateOfEnd,
                        lang.equalsIgnoreCase("ko") ? project.clientKo : project.clientEn,
                        lang.equalsIgnoreCase("ko") ? experience.companyKo : experience.companyEn,
                        lang.equalsIgnoreCase("ko") ? project.workKo : project.workEn,
                        project.skill
                ))
                .from(project)
                .leftJoin(project.experience, experience)
                .orderBy(project.dateOfStart.desc())
                .fetch();
    }
}
