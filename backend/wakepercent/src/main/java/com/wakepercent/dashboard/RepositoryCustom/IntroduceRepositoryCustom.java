package com.wakepercent.dashboard.RepositoryCustom;

import com.wakepercent.commonEntity.ContentType;
import com.wakepercent.commonEntity.dto.ContentDto;
import com.wakepercent.dashboard.Entity.dto.WebUpdateLogDto;

import java.util.List;

public interface IntroduceRepositoryCustom {
    List<ContentDto> findByContentType(ContentType contentType, String lang);

    List<WebUpdateLogDto> findWebUpdateLog(String lang);
}
