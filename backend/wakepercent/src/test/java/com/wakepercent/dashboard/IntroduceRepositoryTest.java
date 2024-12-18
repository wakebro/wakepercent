package com.wakepercent.dashboard;

import java.util.List;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.wakepercent.commonEntity.ContentType;
import com.wakepercent.commonEntity.dto.ContentDto;
//import com.wakepercent.commonEntity.dto.QContentDto;
import com.wakepercent.dashboard.Entity.dto.ExperienceDto;
import com.wakepercent.dashboard.Entity.dto.ProjectDetailDto;
import com.wakepercent.dashboard.Entity.dto.ProjectDto;
import com.wakepercent.dashboard.Entity.dto.WebUpdateLogDto;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.wakepercent.commonEntity.Content;

import static com.wakepercent.commonEntity.QContent.content;
import static org.springframework.util.StringUtils.hasText;

@SpringBootTest
@Transactional
class IntroduceRepositoryTest {
    @Autowired IntroduceRepository introduceRepository;

    @Test
    public void findByContentTypeTest() {
        ContentType contentType = ContentType.SITE;
        System.out.println("contentType = " + contentType);
        String lang = "ko";
        List<ContentDto> result = introduceRepository.findByContentType(contentType, lang);

        for (ContentDto ct : result) {
            System.out.println("ct.getContent() = " + ct.getContent());
        }
    }

    @Test
    public void findWebUpdateLog() {
        String lang = "ko";
        List<WebUpdateLogDto> result = introduceRepository.findWebUpdateLog(lang);
        for (WebUpdateLogDto dto : result) {
            System.out.println("dto.getTitle() = " + dto.getTitle());
            System.out.println("dto.getContent() = " + dto.getContent());
        }
    }

    @Test
    public void findExperiencesTest() {
        String lang = "ko";
        List<ExperienceDto> result = introduceRepository.findExperiences(lang);
        for (ExperienceDto dto : result) {
            System.out.println("dto = " + dto.getTitle());
            System.out.println("dto = " + dto.getCompany());
            System.out.println("dto = " + dto.getWork());
        }
    }
    
    @Test
    public void findProjectsTest() {
        String lang = "en";
        List<ProjectDto> results = introduceRepository.findProjects(lang);
        for (ProjectDto dto : results) {
            System.out.println("dto.getName() = " + dto.getName());
            System.out.println("dto.getCompany() = " + dto.getCompany());
        }
    }
    
    @Test
    public void findProjectDetailTest() {
        Long id = 7L;
        String lang = "ko";
        ProjectDetailDto result = introduceRepository.findProjectDetail(id, lang);
        System.out.println("result.getName() = " + result.getName());
        System.out.println("result.getWorkDetail() = " + result.getWorkDetail());
    }
}