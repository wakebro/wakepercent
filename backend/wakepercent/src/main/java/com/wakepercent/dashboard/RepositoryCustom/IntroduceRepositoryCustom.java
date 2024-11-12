package com.wakepercent.dashboard.RepositoryCustom;

import com.wakepercent.commonEntity.ContentType;
import com.wakepercent.commonEntity.dto.ContentDto;
import com.wakepercent.dashboard.Entity.dto.ExperienceDto;
import com.wakepercent.dashboard.Entity.dto.ProjectDto;
import com.wakepercent.dashboard.Entity.dto.WebUpdateLogDto;

import java.util.List;

public interface IntroduceRepositoryCustom {
    List<ContentDto> findByContentType(ContentType contentType, String lang);
    List<WebUpdateLogDto> findWebUpdateLog(String lang);
    List<ExperienceDto> findExperiences(String lang);
    List<ProjectDto> findProjects(String lang);
}
