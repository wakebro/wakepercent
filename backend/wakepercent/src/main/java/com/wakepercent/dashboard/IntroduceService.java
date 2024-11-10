package com.wakepercent.dashboard;

import com.wakepercent.commonEntity.Content;
import com.wakepercent.commonEntity.ContentType;
import com.wakepercent.commonEntity.dto.ContentDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class IntroduceService {
    private final IntroduceRepository introduceRepository;

    public void getSiteIntroduce() {
        List<Content> introduce = introduceRepository.findAll();
    }

    public ContentDto getContent (ContentType contentType, String lang) { return introduceRepository.findByContentType(contentType, lang).get(0);}
}
