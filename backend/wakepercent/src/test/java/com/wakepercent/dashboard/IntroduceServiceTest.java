package com.wakepercent.dashboard;

import com.wakepercent.commonEntity.ContentType;
import com.wakepercent.commonEntity.dto.ContentDto;
import com.wakepercent.dashboard.Entity.dto.ExperienceDto;
import com.wakepercent.dashboard.Entity.dto.ProjectDto;
import com.wakepercent.dashboard.Entity.dto.WebUpdateLogDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@SpringBootTest
@Transactional
class IntroduceServiceTest {
    @Autowired IntroduceService introduceService;

    @Test
    public void getContentTest() {
        ContentType contentType = ContentType.SITE;
        System.out.println("contentType = " + contentType);
        String lang = "ko";
        ContentDto result = introduceService.getContent(contentType, lang);
        System.out.println("result.getContent() = " + result.getContent());
    }

    @Test
    public void getWebUpdateLogTest() {
        String lang = "en";
        List<WebUpdateLogDto> results = introduceService.getWebUpdateLog(lang);
        for (WebUpdateLogDto dto : results) {
            System.out.println("dto.getTitle() = " + dto.getTitle());
            System.out.println("dto.getTitle() = " + dto.getContent());
            System.out.println("dto.getTitle() = " + dto.getCreateDate());
        }
    }

    @Test
    public void getExperiencesTest() {
        String lang = "en";
        List<ExperienceDto> results = introduceService.getExperiences(lang);
        for (ExperienceDto dto : results) {
            System.out.println("dto.getTitle() = " + dto.getTitle());
        }
    }

    @Test
    public void getProjectsTest() {
        String lang = "en";
        List<ProjectDto> results = introduceService.getProjects(lang);
        for (ProjectDto dto : results) {
            System.out.println("dto.getTitle() = " + dto.getName());
            System.out.println("dto.getTitle() = " + dto.getCompany());
        }
    }
}