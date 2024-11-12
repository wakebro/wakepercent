package com.wakepercent.dashboard;

import com.wakepercent.commonEntity.Content;
import com.wakepercent.commonEntity.ContentType;
import com.wakepercent.commonEntity.dto.ContentDto;
import com.wakepercent.dashboard.Entity.dto.ExperienceDto;
import com.wakepercent.dashboard.Entity.dto.WebUpdateLogDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class IntroduceService {
    private final IntroduceRepository introduceRepository;

    public ContentDto getContent (ContentType contentType, String lang) { return introduceRepository.findByContentType(contentType, lang).get(0);}

    public List<WebUpdateLogDto> getWebUpdateLog (String lang) {return introduceRepository.findWebUpdateLog(lang);}

    public List<ExperienceDto> getExperiences (String lang) {return introduceRepository.findExperiences(lang);}
}
